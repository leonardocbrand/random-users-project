<h1><br>
<p align="center">
Frameworks/Bibliotecas utilizadas
</p>
</h1>

Aplicação com deploy em https://todo-list-redux-typescript.vercel.app/ </br >
Histórico de desenvolvimento: https://github.com/programadorEmerson/todo-list-redux-typescript/commits/main

`Obs. Como plus implementado LocalStorage, e aplicação com Vite e não CRA `

`As demais respostas estão na pasta respostas`
</br>/respostas/desempenho.md
</br>/respostas/numeroMaisFrequente.js
</br>/respostas/reduxThunk-ReduxSaga.md
</br>/respostas/renderizacaoCondicional.md
</br>/respostas/somaBaseadaNoAlvo.js

`Observações importantes de funcionalidades`

Aplicação desenvolvida em Mobile Firt</br>
![Mobile Firt](/src/assets/prints/5.png)
![Mobile Firt](/src/assets/prints/6.png)

Filtar colunas</br>
![Filtar colunas](/src/assets/prints/1.png)

Filtar valores</br>
![Filtar valores](/src/assets/prints/2.png)

Gerar Csv ou Xls</br>
![Gerar Csv ou Xls](/src/assets/prints/3.png)

Ordenar qualquer coluna clicando no nome dela</br>
![Ordenar qualquer coluna clicando no nome dela](/src/assets/prints/4.png)

`ReactJs`</br>
O ReactJS é uma biblioteca JavaScript de código aberto para criação de interfaces de usuário interativas. Com sua abordagem baseada em componentes, permite dividir a interface em partes reutilizáveis. Utilizando o Virtual DOM, atualiza apenas as partes modificadas, melhorando o desempenho. O ReactJS usa JSX para mesclar JavaScript e HTML. É amplamente usado e possui uma comunidade ativa, além de extensões como o React Native para desenvolvimento mobile. É uma ótima escolha para criar interfaces dinâmicas e eficientes na web.

`Material-UI`</br>
Material Design é um sistema de design apoiado em código-fonte aberto que auxilia as equipes a criarem experiências digitais de alta qualidade padronizando todas as suas interfaces gráficas. o Material Design tem o princípio de ser simples, direto, chamativo, amigável e intuitivo, então cada elemento da interface deve se encaixar nessas características, além de ser muito bem documentada, ativamente mantida, com vários cases de sucesso, muito customizável, facilitando a criação de componentes com comportamentos padrões, como modals, formulários, além disso existe a possibilidade de customizar com CSS utilizando o padrão recomendado pela própria biblioteca.

`ESLint`</br>
É uma ferramenta de linting para código JavaScript que auxilia os desenvolvedores a identificar e corrigir problemas comuns no código-fonte. Ele analisa o código JavaScript em busca de padrões problemáticos, erros de sintaxe, práticas desencorajadas e outros problemas, fornecendo um feedback útil para melhorar a qualidade e a legibilidade do código, além de que é altamente configurável, permitindo que você personalize as regras de linting de acordo com as necessidades e preferências do seu projeto. Você pode especificar quais regras aplicar, quais regras ignorar, definir estilos de codificação, habilitar ou desabilitar plugins e muito mais. No geral, é uma ferramenta essencial para o desenvolvimento JavaScript, pois ajuda a melhorar a qualidade do código, evita erros comuns e promove boas práticas de programação.

`Eslint-plugin-import-helpers`</br>
É um plugin para o Eslint, uma ferramenta popular de linting de código JavaScript. Esse plugin específico fornece regras e funcionalidades extras relacionadas à importação de módulos e à organização de declarações de import. Com isso, você pode manter um padrão consistente nas importações do seu código, o que melhora a legibilidade e a manutenibilidade do mesmo. Ele oferece várias regras configuráveis para ajudar a evitar importações desorganizadas e garantir uma estrutura coerente nas declarações de import, além de que é uma ferramenta valiosa para equipes de desenvolvimento que desejam manter um código limpo e consistente. Ele ajuda a evitar problemas comuns relacionados à importação de módulos, promovendo boas práticas e padronização dentro do código JavaScript.

`Eslint-plugin-unused-imports`</br>
É um plugin para o Eslint, uma ferramenta popular de linting de código JavaScript. Esse plugin específico é projetado para ajudar a identificar e remover importações não utilizadas em seu código. Com ele você pode garantir que todas as importações em seu código sejam realmente usadas, evitando importações desnecessárias e reduzindo o tamanho do bundle do seu aplicativo, além de que você pode manter seu código mais limpo e livre de importações desnecessárias, o que contribui para uma melhor manutenibilidade e desempenho do seu aplicativo JavaScript.

`Commitizen`</br>
É uma ferramenta de linha de comando que facilita a criação de mensagens de commit padronizadas e semânticas. Ele visa promover uma boa prática de mensagens de commit, seguindo convenções definidas, como o [Conventional Commits](https://www.conventionalcommits.org/), que ajuda a manter um histórico de commit mais legível, organizado e compreensível.
Com o `commitizen`, você pode usar uma interface interativa para criar mensagens de commit seguindo um formato específico, incluindo o tipo de alteração, o escopo, uma descrição concisa e outras informações opcionais. Isso ajuda a fornecer contexto sobre as mudanças realizadas no código e facilita a navegação e a compreensão do histórico de commits além
de que é uma ferramenta útil para equipes que desejam adotar uma abordagem padronizada e semântica para mensagens de commit, tornando mais fácil rastrear e entender as alterações em um projeto.

`Redux`</br>
Redux é uma biblioteca de gerenciamento de estado para aplicativos JavaScript, sendo amplamente utilizada em conjunto com o ReactJS. Ela segue o padrão Flux e ajuda a gerenciar e manter o estado centralizado de uma aplicação de forma previsível e escalável.
No Redux, o estado global da aplicação é armazenado em uma única árvore de estado imutável. As mudanças no estado são feitas através de ações, que são objetos simples descrevendo o que aconteceu. Essas ações são despachadas para um "reducer" que especifica como o estado deve ser atualizado em resposta a cada ação. O reducer retorna um novo estado atualizado, mantendo o estado anterior intacto.

`Typescript`</br>
TypeScript é uma linguagem de programação desenvolvida pela Microsoft e é uma superset da linguagem JavaScript. Ela adiciona recursos de tipagem estática ao JavaScript, permitindo a definição de tipos para variáveis, parâmetros de função, objetos e outros elementos do código.
Uma das principais vantagens do TypeScript é o sistema de tipos. Ele permite detectar erros de tipagem em tempo de compilação, ajudando a encontrar bugs antes mesmo de executar o código. Com a adição de tipos, é possível ter um código mais robusto, legível e com menos erros.

`React-Csv`</br>
O react-csv é uma biblioteca JavaScript que fornece uma maneira simples de gerar e baixar arquivos CSV (Comma-Separated Values) a partir de dados em um aplicativo React. Ele oferece componentes e utilitários para facilitar a criação e manipulação de arquivos CSV.
Com o react-csv, você pode criar facilmente um componente CSVLink que, quando clicado, iniciará o download de um arquivo CSV contendo os dados fornecidos. Você pode personalizar as opções do arquivo CSV, como o separador de colunas, o nome do arquivo, as colunas a serem incluídas e outras configurações.

`React-Xlsx`</br>
A biblioteca react-xlsx é uma ferramenta útil para trabalhar com arquivos XLSX (Excel) em aplicativos React. Ela permite gerar e manipular planilhas do Excel de forma programática.
Com o react-xlsx, você pode criar componentes que geram arquivos XLSX a partir de dados estruturados. Esses dados podem ser tabelas, gráficos, relatórios ou qualquer outro formato suportado pelo Excel. A biblioteca oferece uma interface simples para formatar células, adicionar estilos, aplicar fórmulas e criar várias abas na planilha.

`Desafio`

```bash
Instruções:
Crie uma aplicação ReactJS para um sistema de gerenciamento de tarefas. Você
deve implementar os seguintes requisitos:
1. Exibir uma lista de tarefas na tela, mostrando o título e a descrição de cada
tarefa.
2. Adicionar a funcionalidade de marcar uma tarefa como concluída. Ao clicar
em uma tarefa, ela deve ser marcada como concluída e exibir um estilo visual
diferente.
3. Implementar a funcionalidade de filtrar as tarefas por status (concluídas ou
pendentes).
4. Adicionar a funcionalidade de ordenar as tarefas por data de criação (mais
recentes primeiro ou mais antigas primeiro).
5. Implementar a funcionalidade de edição de tarefas. Ao clicar em um botão
"Editar" ao lado de uma tarefa, um modal deve ser exibido com os campos de
título e descrição preenchidos com os dados da tarefa selecionada. O usuário
pode editar os campos e salvar as alterações.

Requisitos adicionais:
● Use componentes de classe do React.
● Utilize o Redux para o gerenciamento de estado da aplicação.
● Utilize Redux Thunk ou Redux Saga para lidar com ações assíncronas, como a
edição de tarefas.
● Implemente validações de formulário para os campos de título e descrição.
● Adicione estilos personalizados usando CSS ou uma biblioteca de sua
escolha.
● Utilize algum pacote de UI para os componentes visuais, como o Material-UI
ou Ant Design.

Observações:
● Não se preocupe com a persistência de dados. As tarefas podem ser
armazenadas no estado da aplicação.
● Você pode definir a estrutura do estado da aplicação conforme achar
adequado.
● Ao finalizar, adicione instruções de como executar a aplicação
localmente e qualquer informação relevante.

Parte 2: Resolução de problemas
Instruções:
Resolva os seguintes problemas de programação. Implemente uma solução em
JavaScript e forneça uma explicação para cada problema.
Escreva uma função que encontre o número mais frequente em um array de
números inteiros.
Exemplo de entrada: [1, 3, 5, 3, 1, 1, 5, 1, 4]
1. Saída esperada: 1
Dada uma matriz de números inteiros e um alvo, escreva uma função que retorne os
índices de dois números cuja soma seja igual ao alvo. Assuma que cada entrada
tenha exatamente uma solução única.
Exemplo de entrada: array = [2, 7, 11, 15], target = 9
2. Saída esperada: [0, 1]
3. Explique o conceito de "renderização condicional" no React e forneça um
exemplo de uso.
4. Quais são as diferenças entre o uso de "redux-thunk" e "redux-saga" para lidar
com ações assíncronas no Redux?
5. Suponha que você esteja enfrentando um problema de desempenho em uma
aplicação React.
```

<h1><br>
<p align="center">
Importante para Executar a aplicação
</p>
</h1>

```bash
# Instalação de pacotes
$ npm install
# ou
$ yarn

# Testando local (Com Hot Reload)
$ npm run dev
# ou
$ yarn dev
```
