import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

import express from 'express';
import cors from 'cors';
import defineUsuarioRouter from './usuarios/UsuarioRouter'
import defineViagemRouter from './viagens/ViagemRouter'

export default function LabTrip() {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use('/usuarios', defineUsuarioRouter());
  app.use('/trips', defineViagemRouter());

  app.get('/', function(req, res) {

    res.status(200).send('Olá  mundo!');
  });

  return app;
}
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
