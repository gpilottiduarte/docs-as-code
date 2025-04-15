# SDK

## WebService A2A Java Agent

This section aims to assist users with administrator privileges to install the Web Service A2A agent and provide a communication interface for performing password routines. In this document, we’ll  use the Java library as an example. All libraries use the same REST channel to communicate with senhasegura, making it easy to develop in any language that supports REST web services. 

### Agent

This SDK grants access to privileged information and database connection objects for all applications (using the cache feature) and database connection objects.

With this agent, applications can connect to databases without needing to manage authentication and get access credentials.

:::(Info) (Databases)
The supported DBMS technologies are ***MySQL***, ***Oracle***, and ***PostgreSQL***.
:::

### Activities

In this section, the following senhasegura functions will be covered:

* Java Lib Agent Operation
* Agent Compatible Java Versions
* senhasegura settings
* Example of use


### Compatible Java version

The Java Lib 0.1.5 agent is compatible with Java version 1.5 or higher, which allows you to cache passwords on the agent, thus avoiding queries in the vault.

Agent version 0.1.4 is compatible with lower versions of Java 1.5 but does not provide password caching.


### Native Java cache

Using the Web Service A2A Java Agent, the client application will use a protected local cache to store all requested credentials. This functionality improves the application's speed and provides a secure local backup in cases where Senhasegura is out of reach.

For example, if  the target credential has changed the  Web Service A2A Java Agent will fail to build the database object and will request the credential password for senhasegura again. If the new password returned also fails, an exception will be triggered to warn the client application.


### Creating a database connection

By using this example, it’s  possible to connect with a database using a specific credential, vaulted by senhasegura, without sharing the user and password with the application.

The **Consumer Key** and **Consumer Secret** values are used to enable the customer to consume senhasegura features:

```java
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
