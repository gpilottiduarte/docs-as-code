# Segura Docs

Este é o repositório do **Segura Docs**, um sistema de documentação interativa para as soluções Segura. Ele permite que os usuários naveguem por documentos organizados em uma barra lateral, alternem entre idiomas e versões, e interajam com conteúdos dinâmicos, como callouts e tabelas de conteúdo (TOC).

## Funcionalidades

- **Barra lateral interativa**:
  - Navegação por pastas e arquivos.
  - Destaque automático do arquivo atual.
  - Suporte a múltiplos níveis de hierarquia.

- **Callouts estilizados**:
  - Suporte a mensagens de **info**, **warning** e **error** no Markdown.
  - Renderização automática com estilos personalizados.

- **Tabela de conteúdo (TOC)**:
  - Geração dinâmica com base nos headings do conteúdo.
  - Destaque do heading atual com scroll spy.

- **Modo de feedback**:
  - Botões de "like" e "dislike" com modal para envio de mensagens.
  - Integração com um endpoint para coleta de feedback.

- **Suporte a múltiplos idiomas e versões**:
  - Alternância entre idiomas e versões diretamente na interface.
  - Carregamento dinâmico de documentos com base na seleção.

## Configuração

### Pré-requisitos

- Um servidor web para servir os arquivos estáticos (ex.: [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) no VS Code).
- Navegador moderno com suporte a ES6.

### Passos para rodar o projeto

1. Clone este repositório:
   ```bash
   git clone https://github.com/seu-usuario/segura-docs.git
   cd segura-docs
   ```
2. Abra o projeto em um editor de texto ou IDE.
3. Inicie um servidor local para servir os arquivos estáticos. Por exemplo: `npx serve` ou `npx live-server`
4. Acesse o sistema de documentação no navegador: `http://127.0.0.1:5500`

## Personalização
### Estrutura da Barra Lateral
A estrutura da barra lateral é definida no arquivo `structure.json`. 

#### Exemplo:
```json
{
  "name": "4.0",
  "type": "directory",
  "children": [
    {
      "name": "en",
      "type": "directory",
      "children": [
        {
          "name": "Getting Started",
          "type": "directory",
          "children": [
            {
              "name": "Introduction.md",
              "type": "file",
              "path": "4.0/en/Getting Started/Introduction.md"
            }
          ]
        }
      ]
    }
  ]
}
```
### Estilos
Os estilos globais estão definidos no arquivo styles.css. Você pode personalizar:

1. Cores da interface: Ajuste as variáveis CSS no :root.
2. Callouts: Estilos para .callout-info, .callout-warning e .callout-error.

### Callouts no Markdown
Os callouts são definidos no Markdown usando o seguinte formato:

```
:::info (Informação)
Este é um callout informativo.
:::

:::warning (Aviso)
Este é um callout de aviso.
:::

:::error (Erro)
Este é um callout de erro.
:::
```

## Deploy com GitHub Pages
Este projeto utiliza o GitHub Actions para realizar o deploy automático no GitHub Pages. O arquivo de workflow está localizado em `.github/workflows/gh-pages.yml`.

### Configuração do Workflow
1. Certifique-se de que o branch main está configurado como padrão.
2. O workflow será acionado automaticamente ao realizar um push no branch main.
3. O conteúdo será publicado no GitHub Pages a partir do diretório raiz (./).

## Problemas Conhecidos

### Elementos cortados na barra lateral
Quando há muitos níveis de hierarquia, alguns itens podem ser cortados. Certifique-se de que o CSS da barra lateral (.sidebar) tenha overflow-y: auto.

### Callouts não renderizados corretamente
Verifique se a função preProcessCallouts está sendo chamada antes da renderização do Markdown.

## Contribuição
1. Faça um fork do repositório.
2. Crie uma branch para sua feature ou correção com o comando `git checkout -b minha-feature`.
3. Faça commit das suas alterações com o comando `git commit -m "Adiciona minha feature"`.
4. Envie para o repositório remoto com o comando `git push origin minha-feature`.
5. Abra um Pull Request.

## Licença

## Contato
