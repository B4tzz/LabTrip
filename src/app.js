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