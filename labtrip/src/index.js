import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import express from 'express';
import cors from 'cors';
import UsuarioController from './usuarios/UsuarioController'
import UsuarioMiddleware from './usuarios/UsuarioMiddleware'

const app = express();
app.use(cors());
app.use(express.json());


const usuarios = [
  {id: 1, nome: 'Maria'},
  {id: 2, nome: 'João' }
];

const usuarioController =  new UsuarioController(usuarios);
const usuarioMiddleware =  new UsuarioMiddleware(usuarios);

app.route('/usuarios')
.get((req, res) => usuarioController.index(req,res))
.post((req, res) => usuarioController.save(req, res))

app.route('/usuarios/:id')
.all((req, res, next) => usuarioMiddleware.usuarioExiste(req, res, next))
.get((req, res) => usuarioController.show(req, res))
.put((req, res) => usuarioController.update(req, res))
.delete((req, res) => usuarioController.delete(req, res))



app.get('/', function(req, res){
    ReactDOM.render(
        <App />,
      document.getElementById('root')
    );
});

app.listen(3000, function(){
        console.log('Rodando na porta 3000!');
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
