# Plano de Testes de Software

## Plano de Testes Unitários

Dado o momento do projeto, vamos focar em testes unitários para, de modo isolado, ver se as fetures funcionam adequadamente. Para isso separamos os testes unitários em dois grupos: navegação/conteúdo e comunidade.

PARTE I - navegação & conteúdo	

<table>
  <tr>
    <th>Cenário</th>
    <th>Resultado Esperado</th>
  </tr>
  <tr>
    <td>Navegação para a Página Inicial:</td>
    <td>Verifica se a navegação para a página inicial retorna o conteúdo correto.</td>
  </tr>
  <tr>
    <td>Navegação para a Lista de Produtos:</td>
    <td>Verifica se a navegação para a lista de esmaltes retorna o conteúdo correto, incluindo um esmalte específico..</td>
  </tr>
  <tr>
    <td>Navegação para a Página da Comunidade:</td>
    <td>Verifica se a navegação para a página da comunidade retorna o conteúdo correto.</td>
  </tr>
  <tr>
    <td>Menu de Navegação:</td>
    <td>Verifica se o menu de navegação contém os links corretos.</td>
  </tr>
 </table>

PARTE II - comunidade

<table>
  <tr>
    <th>Cenário</th>
    <th>Resultado Esperado</th>
  </tr>
  <tr>
    <td>Registro de Usuário:</td>
    <td>Verifica se o registro de um novo usuário aumenta a contagem de usuários em um.</td>
  </tr>
  <tr>
    <td>Login de Usuário:</td>
    <td>Verifica se o login de um usuário retorna verdadeiro para credenciais válidas.</td>
  </tr>
  <tr>
    <td>Postagem de Comentário:</td>
    <td>Verifica se a postagem de um comentário aumenta a contagem de comentários em um.</td>
  </tr>
  <tr>
    <td>Listagem de Comentários:</td>
    <td>Verifica se a listagem de comentários retorna todos os comentários postados.</td>
  </tr>
  <tr>
    <td>Exclusão de Comentário:</td>
    <td>Verifica se a exclusão de um comentário diminui a contagem de comentários em um.</td>
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

<table>
  <tr>
    <th>Cenário</th>
    <th>Resultado Esperado</th>
  </tr>
  <tr>
    <td>Navegação para a Página Inicial:</td>
    <td>Verifica se a navegação para a página inicial retorna o conteúdo correto.</td>
  </tr>
  <tr>
    <td>Navegação para a Lista de Produtos:</td>
    <td>Verifica se a navegação para a lista de esmaltes retorna o conteúdo correto, incluindo um esmalte específico..</td>
  </tr>
  <tr>
    <td>Navegação para a Página da Comunidade:</td>
    <td>Verifica se a navegação para a página da comunidade retorna o conteúdo correto.</td>
  </tr>
  <tr>
    <td>Menu de Navegação:</td>
    <td>Verifica se o menu de navegação contém os links corretos.</td>
  </tr>
 </table>

#### b. Testes de Comunidade

 <table>
  <tr>
    <th>Cenário</th>
    <th>Resultado Esperado</th>
  </tr>
  <tr>
    <td>Registro de Usuário:</td>
    <td>Verifica se o registro de um novo usuário aumenta a contagem de usuários em um.</td>
  </tr>
  <tr>
    <td>Login de Usuário:</td>
    <td>Verifica se o login de um usuário retorna verdadeiro para credenciais válidas.</td>
  </tr>
  <tr>
    <td>Postagem de Comentário:</td>
    <td>Verifica se a postagem de um comentário aumenta a contagem de comentários em um.</td>
  </tr>
  <tr>
    <td>Listagem de Comentários:</td>
    <td>Verifica se a listagem de comentários retorna todos os comentários postados.</td>
  </tr>
  <tr>
    <td>Exclusão de Comentário:</td>
    <td>Verifica se a exclusão de um comentário diminui a contagem de comentários em um.</td>
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
