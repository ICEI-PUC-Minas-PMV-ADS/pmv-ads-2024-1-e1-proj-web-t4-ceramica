# Plano de Testes de Software

## Plano de Testes Unitários

Dado o momento do projeto, vamos focar em testes unitários para, de modo isolado, ver se as fetures funcionam adequadamente. Para isso separamos os testes unitários em dois grupos: navegação/conteúdo e comunidade.

PARTE I - navegação & conteúdo	

<table>
  <tr>
    <th>Cenário</th>
    <th>Resultado Esperado</th>
    <th>Passo a passo</th>
    <th>Responsável</th>
  </tr>
  <tr>
    <td>Navegação para a Página Inicial:</td>
    <td>Verifica se a navegação para a página inicial retorna o conteúdo correto.</td>
    <td>* Abrir o navegador e navegar para a URL da página inicial ([link](https://pmv-ads-2024-1-e1-proj-web-t4-ceramica-knqb.vercel.app/index.paginaHome.html#sobre-conteudo)).
*  Verificar o conteúdo da página: Assegurar que a página contém o texto "Bem-vindo ao site de Esmaltes Cerâmicos".</td>
    <td>Dani.</td>
  </tr>
  <tr>
    <td>Navegação para a Lista de Produtos:</td>
    <td>Verifica se a navegação para a lista de esmaltes retorna o conteúdo correto, incluindo um esmalte específico.</td>
    <td>* Abrir o navegador e navegar para a URL da lista de esmaltes ([link](https://pmv-ads-2024-1-e1-proj-web-t4-ceramica-knqb.vercel.app/index.paginaHome.html#sobre-conteudo)).
<br> * Verificar o conteúdo da página: Assegurar que a página contém o texto "Lista de Esmaltes Cerâmicos".
<br> * Verificar um esmalte específico: Assegurar que a página contém o texto "Esmalte Azul".</td>
    <td>Marcelo</td>
  </tr>
  <tr>
    <td>Navegação para a Página da Comunidade:</td>
    <td>Verifica se a navegação para a página da comunidade retorna o conteúdo correto.</td>
    <td>* Abrir o navegador e navegar para a URL da comunidade ([link](https://pmv-ads-2024-1-e1-proj-web-t4-ceramica-knqb.vercel.app/index.paginaHome.html#sobre-conteudo)).
<br> * Verificar o conteúdo da página: Assegurar que a página contém o texto "Lista de Esmaltes Cerâmicos".
<br> * Verificar o conteúdo da página: Assegurar que a página contém o texto "Comunidade de Esmaltes Cerâmicos".</td>
    <td>Marcelo</td>
  </tr>
  <tr>
    <td>Menu de Navegação:</td>
    <td>Verifica se o menu de navegação contém os links corretos.</td>
    <td>* Abrir o navegador e navegar para a URL da comunidade ([link](https://pmv-ads-2024-1-e1-proj-web-t4-ceramica-knqb.vercel.app/index.paginaHome.html#sobre-conteudo)).
<br> * Verificar os links do menu: Assegurar que os links para "/home", "/esmaltes", e "/comunidade" estão presentes e corretos..
    <td>Marcelo</td>
  </tr>
 </table>

PARTE II - comunidade

<table>
  <tr>
    <th>Cenário</th>
    <th>Resultado Esperado</th>
    <th>Passo a passo</th>
    <th>Responsável</th>
  </tr>
  <tr>
    <td>Cadastro de Usuário:</td>
    <td>Verifica se a autenticação com o Google está funcionando.</td>
    <td>* Abrir o navegador e navegar para a URL da comunidade ([link](https://pmv-ads-2024-1-e1-proj-web-t4-ceramica-knqb.vercel.app/index.paginaHome.html#sobre-conteudo)).
    <br> * Clicar em Comunidade.
    <br> * Fazer o login.
    <br> * Observar se o usuário está logado na página da Comunidade.
    <td>Andre</td>
  </tr>
  <tr>
    <td>Login de Usuário:</td>
    <td>Verifica se o cadastro está funcionando.</td>
    <td> * Abrir o navegador e navegar para a URL da comunidade ([link](https://pmv-ads-2024-1-e1-proj-web-t4-ceramica-knqb.vercel.app/index.paginaHome.html#sobre-conteudo)).
    <br> * Clicar em cadastre-se.
    <br> * Cadastrar-se.
    <br> * Fazer o login.</td>
    <br> * Observar se o usuário está logado na página da Comunidade.
    <td>Andre</td>
  </tr>
  <tr>
    <td>Postagem de Comentário:</td>
    <td>Verifica se a postagem de um comentário/mensagem está funcionando apropriadamente.</td>
    <td> * Abrir o navegador e navegar para a URL da comunidade (http://seu-site.com/comunidade).
    <br> * Clicar em Gooogle.
    <br> * Fazer o login.
    <br> * Observar se o usuário está logado no Google.
    <br> * Enviar/postar mensagem.</td>
    <td>Andre</td>
  </tr>
  <tr>
    <td>Listagem de Comentários:</td>
    <td>Verifica se a listagem de comentários retorna todos os comentários postados.</td>
    <td> * Abrir o navegador e navegar para a URL da comunidade ([link](https://pmv-ads-2024-1-e1-proj-web-t4-ceramica-knqb.vercel.app/index.paginaHome.html#sobre-conteudo)).
    <br> * Clicar em Gooogle.
    <br> * Fazer o login.
    <br> * Observar se o usuário está logado no Google.
    <br> * Enviar/postar mensagem.
    <br> * Verificar as mensagens listadas por ordem cronológicas de cima para baixo.</td>
    <td>Andre</td>
  </tr>
  <tr>
    <td>Exclusão de Comentário:</td>
    <td>Verifica se a exclusão de um comentário é efetiva.</td>
    <td> * Abrir o navegador e navegar para a URL da comunidade ([link](https://pmv-ads-2024-1-e1-proj-web-t4-ceramica-knqb.vercel.app/index.paginaHome.html#sobre-conteudo)).
    <br> * Clicar em Gooogle.
    <br> * Fazer o login.
    <br> * Observar se o usuário está logado no Google.
    <br> * Selecionar a mensagem.
    <br> * Deletar a mensagem.
    <br> * Verificar se a mensagem foi deletada.</td>
    <td>Andre</td>
  </tr>
 </table>

## Plano de Testes de Regressão

* O objetivo do teste de regressão é evitar que erros que foram corrigidos antes no software antes voltem a aparecer na hora de se incrementar algo novo a ele.

### 1. Objetivo
* Garantir que as funcionalidades existentes do site de esmaltes cerâmicos e da comunidade continuem funcionando corretamente após alterações, atualizações ou adições de novas funcionalidades.

### 2. Escopo
* Testar todas as funcionalidades principais do site.
* Incluir testes para menus e navegação.
* Incluir testes para a comunidade, como registro, login, postagem de comentários, etc.
* Verificar integração entre diferentes componentes do sistema.

### 3. Estratégia de Teste

#### Ambiente de Testes

* Configurar um ambiente de teste semelhante ao ambiente de produção.
*Utilizar dados de teste representativos.

#### Ferramentas de Teste

* Utilizar ferramentas de automação de testes como Selenium para testes de interface de usuário.
* Utilizar Postman para testes de APIs.
* Frameworks de testes unitários e de integração como NUnit, xUnit ou MSTest.

### 4. Casos de Teste de Regressão

#### a. Testes de Navegação

PARTE I - navegação & conteúdo	

<table>
  <tr>
    <th>Cenário</th>
    <th>Resultado Esperado</th>
    <th>Passo a passo</th>
    <th>Responsável</th>
  </tr>
  <tr>
    <td>Navegação para a Página Inicial:</td>
    <td>Verifica se a navegação para a página inicial retorna o conteúdo correto.</td>
    <td>* Abrir o navegador e navegar para a URL da página inicial ([link](https://pmv-ads-2024-1-e1-proj-web-t4-ceramica-knqb.vercel.app/index.paginaHome.html#sobre-conteudo)).
*  Verificar o conteúdo da página: Assegurar que a página contém o texto "Bem-vindo ao site de Esmaltes Cerâmicos".</td>
    <td>Dani.</td>
  </tr>
  <tr>
    <td>Navegação para a Lista de Produtos:</td>
    <td>Verifica se a navegação para a lista de esmaltes retorna o conteúdo correto, incluindo um esmalte específico.</td>
    <td>* Abrir o navegador e navegar para a URL da lista de esmaltes ([link](https://pmv-ads-2024-1-e1-proj-web-t4-ceramica-knqb.vercel.app/index.paginaHome.html#sobre-conteudo)).
<br> * Verificar o conteúdo da página: Assegurar que a página contém o texto "Lista de Esmaltes Cerâmicos".
<br> * Verificar um esmalte específico: Assegurar que a página contém o texto "Esmalte Azul".</td>
    <td>Marcelo</td>
  </tr>
  <tr>
    <td>Navegação para a Página da Comunidade:</td>
    <td>Verifica se a navegação para a página da comunidade retorna o conteúdo correto.</td>
    <td>* Abrir o navegador e navegar para a URL da comunidade ([link](https://pmv-ads-2024-1-e1-proj-web-t4-ceramica-knqb.vercel.app/index.paginaHome.html#sobre-conteudo)).
<br> * Verificar o conteúdo da página: Assegurar que a página contém o texto "Lista de Esmaltes Cerâmicos".
<br> * Verificar o conteúdo da página: Assegurar que a página contém o texto "Comunidade de Esmaltes Cerâmicos".</td>
    <td>Marcelo</td>
  </tr>
  <tr>
    <td>Menu de Navegação:</td>
    <td>Verifica se o menu de navegação contém os links corretos.</td>
    <td>* Abrir o navegador e navegar para a URL da comunidade ([link](https://pmv-ads-2024-1-e1-proj-web-t4-ceramica-knqb.vercel.app/index.paginaHome.html#sobre-conteudo)).
<br> * Verificar os links do menu: Assegurar que os links para "/home", "/esmaltes", e "/comunidade" estão presentes e corretos..
    <td>Marcelo</td>
  </tr>
 </table>

#### b. Testes de Comunidade

<table>
  <tr>
    <th>Cenário</th>
    <th>Resultado Esperado</th>
    <th>Passo a passo</th>
    <th>Responsável</th>
  </tr>
  <tr>
    <td>Cadastro de Usuário:</td>
    <td>Verifica se a autenticação com o Google está funcionando.</td>
    <td>* Abrir o navegador e navegar para a URL da comunidade ([link](https://pmv-ads-2024-1-e1-proj-web-t4-ceramica-knqb.vercel.app/index.paginaHome.html#sobre-conteudo)).
    <br> * Clicar em Comunidade.
    <br> * Fazer o login.
    <br> * Observar se o usuário está logado na página da Comunidade.
    <td>Andre</td>
  </tr>
  <tr>
    <td>Login de Usuário:</td>
    <td>Verifica se o cadastro está funcionando.</td>
    <td> * Abrir o navegador e navegar para a URL da comunidade ([link](https://pmv-ads-2024-1-e1-proj-web-t4-ceramica-knqb.vercel.app/index.paginaHome.html#sobre-conteudo)).
    <br> * Clicar em cadastre-se.
    <br> * Cadastrar-se.
    <br> * Fazer o login.</td>
    <br> * Observar se o usuário está logado na página da Comunidade.
    <td>Andre</td>
  </tr>
  <tr>
    <td>Postagem de Comentário:</td>
    <td>Verifica se a postagem de um comentário/mensagem está funcionando apropriadamente.</td>
    <td> * Abrir o navegador e navegar para a URL da comunidade ([link](https://pmv-ads-2024-1-e1-proj-web-t4-ceramica-knqb.vercel.app/index.paginaHome.html#sobre-conteudo)).
    <br> * Clicar em Gooogle.
    <br> * Fazer o login.
    <br> * Observar se o usuário está logado no Google.
    <br> * Enviar/postar mensagem.</td>
    <td>Andre</td>
  </tr>
  <tr>
    <td>Listagem de Comentários:</td>
    <td>Verifica se a listagem de comentários retorna todos os comentários postados.</td>
    <td> * Abrir o navegador e navegar para a URL da comunidade ([link](https://pmv-ads-2024-1-e1-proj-web-t4-ceramica-knqb.vercel.app/index.paginaHome.html#sobre-conteudo)).
    <br> * Clicar em Gooogle.
    <br> * Fazer o login.
    <br> * Observar se o usuário está logado no Google.
    <br> * Enviar/postar mensagem.
    <br> * Verificar as mensagens listadas por ordem cronológicas de cima para baixo.</td>
    <td>Andre</td>
  </tr>
  <tr>
    <td>Exclusão de Comentário:</td>
    <td>Verifica se a exclusão de um comentário é efetiva.</td>
    <td> * Abrir o navegador e navegar para a URL da comunidade ([link](https://pmv-ads-2024-1-e1-proj-web-t4-ceramica-knqb.vercel.app/index.paginaHome.html#sobre-conteudo)).
    <br> * Clicar em Gooogle.
    <br> * Fazer o login.
    <br> * Observar se o usuário está logado no Google.
    <br> * Selecionar a mensagem.
    <br> * Deletar a mensagem.
    <br> * Verificar se a mensagem foi deletada.</td>
    <td>Andre</td>
  </tr>
 </table>

### 5. Automatização dos Testes

* Script de Automação: Criar scripts de automação para os casos de teste acima, utilizando Selenium para a interface do usuário e Postman para APIs.
Pipeline de Integração Contínua (CI): Configurar um pipeline CI (por exemplo, com Jenkins, GitHub Actions ou GitLab CI) para executar os testes de regressão automaticamente em cada push ou pull request.

* Pipeline de Integração Contínua (CI): Configurar um pipeline CI (GitHub Actions) para executar os testes de regressão automaticamente em cada push ou pull request.

### 6. Critérios de Aceitação

* Todos os testes de regressão devem passar sem falhas.
* Todos os defeitos encontrados durante os testes de regressão devem ser corrigidos e retestados.
  
### 7. Observabilidade - Relatórios e Análise

* Relatórios de Teste: Gerar relatórios detalhados dos resultados dos testes de regressão.
* Análise de Resultados: Analisar os resultados dos testes para identificar e corrigir quaisquer regressões.
* Revisão Contínua: Atualizar o conjunto de testes de regressão conforme novas funcionalidades são adicionadas ou existentes são modificadas.

| Andre Dexheimer |
 
> **Links Úteis**:
> - [IBM - Criação e Geração de Planos de Teste](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> -  [Teste de Software: Conceitos e tipos de testes](https://blog.onedaytesting.com.br/teste-de-software/)
> - [Criação e Geração de Planos de Teste de Software](https://www.ibm.com/developerworks/br/local/rational/criacao_geracao_planos_testes_software/index.html)
> - [Ferramentas de Test para Java Script](https://geekflare.com/javascript-unit-testing/)
> - [UX Tools](https://uxdesign.cc/ux-user-research-and-user-testing-tools-2d339d379dc7)
