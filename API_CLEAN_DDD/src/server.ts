import express from 'express';
import {rotasUser} from './apresentacao/rotas/rotasUser';
import { rotasArenas } from './apresentacao/rotas/rotasArena';
import { rotasPartidas } from './apresentacao/rotas/rotasPartidas';
import { rotasConvite } from './apresentacao/rotas/rotasConvites';

const app = express();
app.use(express.json());

app.use('/usuarios', rotasUser);
app.use('/arenas', rotasArenas);
app.use('/partidas', rotasPartidas);
app.use('/convites', rotasConvite)

app.listen(3000, () => {
    console.log('Servidor rodando na http://localhost:3000');
});