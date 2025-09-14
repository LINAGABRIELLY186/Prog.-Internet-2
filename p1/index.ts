import express, {request, Request} from 'express';
import 'reflect-metadata';

const app = express();
const port = 3000;

app.use(express.json());
// Criando obj de partidas 
interface Jogadores{
    id: string | number;
    nome: string;
    sexo: string;
    categoria: string;
}
const jogadores: Jogadores[] = [];
let idJogador = 1;

//CRIAR JOGADOR
app.post('/jogadores', (req, resp)=>
{
    const {nome, sexo, categoria} = req.body;

    const novoJogador: Jogadores = {
        id: idJogador++,
        nome,
        sexo,
        categoria,
    };

    jogadores.push(novoJogador);

    return resp.status(201).json(novoJogador);
});

//LISTAR JOGADORES

app.get('/jogadores', (req, resp)=>
{
    return resp.json(jogadores);
});


app.get('/jogadores/:id', (req: Request<{id: string}>, resp)=> {
    const id = parseInt(req.params.id);
    const jogador = jogadores.find((j) => j.id === id);

    
    if (!jogador) {
        return resp.status(404).json({ message: 'Jogador não encontrado' });
    }


    return resp.status(200).json(jogador);
});

//ATULIZAR JOGADOR
app.put('/jogadores/:id', (req, res) => {
    
    const id = parseInt(req.params.id);
    const jogadorIndex = jogadores.findIndex((jogador) => jogador.id === id);

    
    if (jogadorIndex === -1) {
        return res.status(404).json({ message: 'Jogador não encontrado' });
    }

    const jogadorExistente = jogadores[jogadorIndex];
    
    
    const jogadorAtualizado = {
        ...jogadorExistente,
        ...req.body, 
        id: jogadorExistente.id 
    };

   
    jogadores[jogadorIndex] = jogadorAtualizado;

    return res.status(200).json(jogadorAtualizado);
});

//DELETAR JOGADOR
app.delete('jogadores/:id', (req,res)=>
{
    const id = parseInt(req.params.id);
    const jogadorIndex = jogadores.findIndex((jogador) => jogador.id === id);

    if (jogadorIndex === -1) {
        return res.status(404).json({ message: 'Jogador não encontrado' });
    }
    jogadores.splice(jogadorIndex, 1);

    return res.status(204).send();
})

//CRIAR OBJ DE PARTIDAS
interface Partidas{
    idPartida: string | number;
    local: string;
    data: string;
    categiria: string;
    tipo: string;

}
const partidas: Partidas[] = [];
let idPartida = 1;
//CRIAR PARTIDA

app.post('/partidas', (req, resp)=>
{
    const {local, data, categoria, tipo} = req.body; 
    const novaPartida: Partidas = {
        idPartida: idPartida++,
        local: local,
        data: data,
        categiria: categoria,
        tipo: tipo,
    };  
    partidas.push(novaPartida);

    return resp.status(201).json(novaPartida);
});

app.get('/partidas', (req, resp)=>
{
    return resp.json(partidas);
});

app.get('/partidas/:idPartida', (req: Request<{idPartida: string}>, resp)=> {
    const idPartida = parseInt(req.params.idPartida);
});

app.put('/partidas/:idPartida', (req, res) => {

    const id = parseInt(req.params.idPartida);
    
    const partidaIndex = partidas.findIndex((partida) => partida.idPartida === id);

    if (partidaIndex === -1) {
        return res.status(404).json({ message: 'Partida não encontrada' });
    }

    const partidaExistente = partidas[partidaIndex];
    const partidaAtualizada = {
        ...partidaExistente,
        ...req.body,
        idPartida: partidaExistente.idPartida 
    };

    
    partidas[partidaIndex] = partidaAtualizada;

    return res.status(200).json(partidaAtualizada);
});

// CRIANDO OBJ DE ADESAO
interface Adesao {
    id: number;
    partidaId: number;
    jogadorId: number;
    status: string;
}
const adesoes: Adesao[] = [];
let idAdesao = 1;

app.post('/partidas/:id/adesao', (req, res) => {
    const partidaId = parseInt(req.params.id);
    const { jogadorId } = req.body;
    
    // Procura a partida para garantir que ela existe
    const partida = partidas.find((p) => p.idPartida === partidaId);
    if (!partida) {
        return res.status(404).json({ message: 'Partida não encontrada' });
    }

    const novaAdesao: Adesao = {
        id: idAdesao++,
        partidaId,
        jogadorId,
        status: 'pendente' // O primeiro sempre começa como 'pendente'
    };
    adesoes.push(novaAdesao);

    return res.status(201).json(novaAdesao);
});

app.get('/partidas/:id/adesoes', (req, res) => {
    const partidaId = parseInt(req.params.id);
    
    
    const adesoesDaPartida = adesoes.filter((a) => a.partidaId === partidaId);
    
    if (adesoesDaPartida.length === 0) {
      return res.status(404).json({ message: 'Nenhuma adesão encontrada para esta partida.' });
    }
    
    return res.status(200).json(adesoesDaPartida);
});

app.put('/partidas/:id/adesao/:adesaoId', (req, res) => {
    const adesaoId = parseInt(req.params.adesaoId);
    const { status } = req.body;

    const adesaoIndex = adesoes.findIndex((a) => a.id === adesaoId);

    if (adesaoIndex === -1) {
        return res.status(404).json({ message: 'Adesão não encontrada' });
    }

    const adesaoExistente = adesoes[adesaoIndex];
    const adesaoAtualizada = {
        ...adesaoExistente,
        status: status || adesaoExistente.status // Atualiza apenas o status
    };

    adesoes[adesaoIndex] = adesaoAtualizada;
    
    return res.status(200).json(adesaoAtualizada);
});

// CRIANDO OBJ DE CONVITE
interface Convite {
    id: number;
    convidadoEmail: string;
    convidadorNome: string;
    convidadorID: number;
    status: string;
}
const convites: Convite[] = [];
let idConvite = 1;

app.post('/convites', (req, res) => {
    const { convidadoEmail, convidadorNome, convidadorID } = req.body;
    
    const novoConvite: Convite = {
        id: idConvite++,
        convidadoEmail,
        convidadorNome,
        convidadorID,
        status: 'pendente' // Status inicial
    };
    convites.push(novoConvite);

    return res.status(201).json(novoConvite);
});

app.get('/convites', (req, res) => {
    return res.status(200).json(convites);
});
app.put('/convites/:id', (req, res) => {
    const conviteId = parseInt(req.params.id);
    const { status } = req.body;

    const conviteIndex = convites.findIndex((c) => c.id === conviteId);

    if (conviteIndex === -1) {
        return res.status(404).json({ message: 'Convite não encontrado' });
    }

    const conviteExistente = convites[conviteIndex];
    const conviteAtualizado = {
        ...conviteExistente,
        status: status || conviteExistente.status //mescla tudo e atualiza o status
    };

    convites[conviteIndex] = conviteAtualizado;
    
    return res.status(200).json(conviteAtualizado);
});

//PARA INICILIZAR 
app.listen(port, () => {
    console.log('Servidor rodando na porta ' + port);
}
)