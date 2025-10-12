import { Request, Response } from "express";
import { criarPartida } from "../../aplicacao/casos/Partidas/criarPartida";
import { repoPartida } from "../../persistencia/repoPartidas";
import { atualizarPartida } from "../../aplicacao/casos/Partidas/atulizarPartida";
import { deletePartida } from "../../aplicacao/casos/Partidas/deletePartida";


const repositorioPartidas = new repoPartida;
const criarPartidas = new criarPartida(repositorioPartidas);

export class PartidasController {
    static criarPartidas (req: Request, res: Response) {
        try {
            const { nome, arena, usuarios} = req.body;
            const partida = criarPartidas.executar(nome, arena, usuarios);
            res.status(201).json(partida);
        } catch (error: any) {
            res.status(400).json({ erro: error.message });
        }   
    }

    static listarPartidas (req: Request, res: Response) {
        const partida = repositorioPartidas.listarPartida();
        res.status(200).json(partida);
    }

    static atualizarPartida(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const partida = atualizarPartida.executar(id, req.body);
      res.json(partida);
    } catch (erro: any) {
      res.status(404).json({ mensagem: erro.message });
    }
    }
    static deletePartida(req: Request, res: Response){
        try{
            const id = Number(req.params.id);
            const partida = deletePartida.executar(id);
            res.json(partida)
        } catch (erro: any){
            res.status(404).json({mensagem: erro.message})
        }
    }

}
