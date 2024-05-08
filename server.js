require('dotenv').config();
const express = require('express');
const app = express();

const routes = require('./routes')
const path = require('path');
const helmet = require('helmet');

const { middlWareGlobal, checkCsrfError,  csrfMiddleware} = require('./src/Middlewares/middlewares');

app.use(helmet());
app.use(express.urlencoded({extends: true}))
app.use(express.json());

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios middleware
app.use(middlWareGlobal);
// app.use(outroMiddlWare);
app.use(routes);

app.listen(9082, () => {
        console.log('Acessar http://localhost:9082')
        console.log('Servidor executando na porta 9082')
});
