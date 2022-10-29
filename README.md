<h3 align="center">
  
</h3>

<br>
## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Prisma](https://www.prisma.io/)
- [React Native](https://facebook.github.io/react-native/)
- [Expo](https://docs.expo.dev/)

## 💻 Projeto

A aplicação desenvolvida neste projeto é um app para o professor cadastrar e gerenciar cursos. Esse app tem seu backend construído em node que fornece uma api para ser consumida pelo aplicações mobile.

## 📥 Instalação e execução

Faça um clone desse repositório

### Backend

1. A partir da raiz do projeto, entre na pasta rodando `cd backend`;
2. Execulte `npm install` ou `yarn` para instalar as dependências;
3. Tenha um banco de dados local postgresSQL, crie na raiz do projeto um arquivo .env
4. No arquivo .env adicione uma variavel e substitua pelos seus dados DATABASE_URL="postgresql://myuser:mypassword@localhost:5432/mydb?schema=public"
5. Execute no terminal o seguinte comando para criar as migratiosn npx prisma migrate dev
6. Para iniciar o backend execute yarn dev

### Frontend

1. A partir da raiz do projeto, entre na pasta rodando `cd frontend && cd mindconsulting`;
2. Execulte `npm install` ou `yarn` para instalar as dependências;
3. Para se conectar com o backend navegue ate a pasta `src > config` e substitua a variável base pelo seu endereço de IP ou localhost seguido da porta que esta rodando o backend. Ex: base = "http://meuip||localhost:3000/"
4. Abra o terminal e execute npx expo start para inciar o aplicativo mobile, leia o QRCode com o Aplicativo ExpoGO.  

## 👨‍💻 Desenvolvido

Ricardo Girardi <p></p>
[![Linkedin Badge](https://img.shields.io/badge/-LinkedIn-blue?style=flat-square&logo=Linkedin&logoColor=white&link=https://www.linkedin.com/in/armandoaaj/)](https://www.linkedin.com/in/ricardo-girardi1994/)

