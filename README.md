# layout-google-news
Creating google news layout to practice frontend

![image](https://user-images.githubusercontent.com/85910024/225412857-dc273fad-743a-40b8-9830-69f8a85f118e.png)

Essa aplicação foi desenvolvida para estudos seguindo os ensinamentos da atraves de um desafio proposto na equipe de trabalho

E neste desafio é abordado a utilização de React com Typescript onde recriamos a tela do Google News e também uma API Fake simular a API e controlar os dados das noticias locais como gerador de imagens aleatórias.

Foram utilizados também os conceitos de Context API e transição de dados por propriedades evitando "Prop drilling*", e layout com Styled Components.

🧪 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [ReactModal](https://www.npmjs.com/package/react-modal)
- [MirageJS](https://miragejs.com/)
- [Styled-components](https://styled-components.com/)”


Documento de estudos & Seus Comandos, ou se preferiri, simplesmente "Como Executar"
Assim como também aqui nesta seção temos o Instalar as dependências
E para starta , bastar fazer um npm run dev


npm create vite@latest

PS C:\Users\alber\Desktop\estudos> npm create vite@latest
√ Project name: ... google-news-cover
√ Select a framework: » React
√ Select a variant: » TypeScript

Scaffolding project in C:\Users\alber\Desktop\estudos\google-news-cover...

Done. Now run:

  cd google-news-cover
  npm install
  npm run dev

npm i styled-components
npm i @types/styled-components -D

arquivo
prettier.config.js
configuração do arquivo

module.exports = {
  endOfLine: 'auto',
  semi: true,
  singleQuote: true,
  trailingComma: 'all',
  arrowParens: 'avoid',
};

para colorir o SVG 
https://angel-rs.github.io/css-color-filter-generator/

npm install json-server -D
"json-server": "json-server server.json -p 3333",// colocar no script do package.json


## 🔖 Layout

Você pode visualizar o layout do projeto, ckicando no link a baixo e abrindo assim a pagina do GoogleNews:
https://news.google.com/home?hl=pt-BR&gl=BR&ceid=BR:pt-419

MIT License
Copyright (c) 2022 Jonathan Rios Sousa
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
