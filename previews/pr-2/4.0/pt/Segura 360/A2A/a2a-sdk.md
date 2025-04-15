# SDK

## Agente Java WebService A2A 

Neste documento utilizaremos a biblioteca Java como exemplo. Todas bibliotecas utilizam do mesmo canal REST para comunicação com o senhasegura , facilitando o desenvolvimento em qualquer linguagem que tenha suporte a webservice REST.

Este SDK disponibiliza acesso a credenciais (com recurso de cache) e conexão de banco de dados.

Os bancos de dados suportados para conexão atualmente são: ***MySQL***, ***Oracle*** e ***PostgreSQL***.

Os dados retornados pela API são os dados do Dispositivo e Credencial.

### Atividades

Nesta seção, iremos abordar as seguintes funções do senhasegura :

-   Operação da biblioteca Java

-   Versões Java compatíveis com o agente

-   Configurações do senhasegura

-   Exemplos de uso

-   Chamada de API via WebService

### Versões compatíveis do Java

O agente Java Lib 0.1.5 é compatível com a versão Java 1.5 ou superior, o que permite o cache das senhas do agente, evitando assim consultas no cofre.

A versão 0.1.4 do agente é compatível com versões inferiores do Java 1.5, mas não fornece cache de senhas.

### Java cache nativo

Utilizando o Agente Java WebService A2A , a aplicação cliente irá utilizar um cache local protegido para armazenar todas credenciais requisitadas. Essa funcionalidade garante a aplicação uma melhor performance e um backup local seguro para situaçõe sonde o senhasegura está inalcançável.

Se a credencial alvo sofrer alterações, o Agente Java WebService A2A irá falhar em construir o objeto de conexão de banco de dados e irá requisitar novamente a senha para o senhasegura . E se a nova senha retornada também falhar, uma exceção será lançada para alertar a aplicação cliente.

### Usando o token para acessar os recursos

O seguinte script exemplifica o uso do recurso WebService A2A entre um cliente e o senhasegura :

```json
package br.com.mt4.senhasegura;

import java.io.IOException;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;

//#########################################################
// senhasegura connection class
import br.com.mt4.senhasegura.sql.ConnectionFactory;
//#########################################################

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

public class QueryServlet extends HttpServlet {

    public void doPost(HttpServletRequest request,
        HttpServletResponse response) throws IOException, ServletException {
        try {

            String url = request.getParameter("url");
            String consumerKey = request.getParameter("consumerkey");
            String consumerSecret = request.getParameter("consumersecret");
            String tokenKey = request.getParameter("tokenkey");
            String tokenSecret = request.getParameter("tokensecret");

            if (url.endsWith("/") == false) {
                url = url + "/";
            }

            // clear cache flag
            Boolean isClearCache = false;
            isClearCache = request.getParameter("clearCache").equals("clear");

            // ###################
            // SENHASEGURA - START

            // Connection factory
            ConnectionFactory factory = new ConnectionFactory(url,
                consumerKey, consumerSecret, tokenKey, tokenSecret);
            factory.setReferer(request.getRequestURL().toString());

            // Clear the cache if needed
            if (isClearCache)
                factory.clearCacheById(
                    Integer.parseInt(request.getParameter("id")));

            // Get database connection with specified password
            Connection con = factory.getConnection(
                Integer.parseInt(request.getParameter("id")));

            // SENHASEGURA - END
            // ###################

            // Prepare statement with query
            PreparedStatement stmt = con.prepareStatement(
                request.getParameter("query"));

            // Run a query
            ResultSet rs = stmt.executeQuery();

            // Table
            response.getWriter().println(
                "<table class='table table-condensed table-bordered'>");

            // Header
            response.getWriter().println("<thead><tr>");
            for (int i = 1; i <= rs.getMetaData().getColumnCount(); i++) {
                response.getWriter().println(
                    "<th>" + rs.getMetaData().getColumnName(i) + "</th>");
            }
            response.getWriter().println("</tr></thead>");

            // iterate on the ResultSet
            response.getWriter().println("<tbody>");
            while (rs.next()) {
                response.getWriter().println("<tr>");
                for (int i = 1; i <= rs.getMetaData().getColumnCount(); i++) {
                    response.getWriter().println(
                        "<td>" + rs.getString(i) + "</td>");
                }
                response.getWriter().println("</tr>");
            }
            response.getWriter().println("</tbody>");
            response.getWriter().println("</table>");

            rs.close();
            stmt.close();
            con.close();

        } catch (Exception e) {
            response.getWriter().println(
                "<div class='alert alert-danger'><b>Error: </b>"
                + e.getMessage() + "</div>");
            response.getWriter().println("<pre>");
            e.printStackTrace(response.getWriter());
            response.getWriter().println("</pre>");
        }
    }
}
```