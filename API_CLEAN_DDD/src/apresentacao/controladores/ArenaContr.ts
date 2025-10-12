import {Request, Response} from "express";
import { criarArena } from "../../aplicacao/casos/Arenas/criarArena";
import { repoArena } from "../../persistencia/repoArena";
import { AtualizarArena } from "../../aplicacao/casos/Arenas/atualizarArena";
import { deleteArena } from "../../aplicacao/casos/Arenas/deletarArena";

const repositorioArena = new repoArena();
const criararena = new criarArena(repositorioArena);
const atualizararena = new AtualizarArena(repositorioArena);
const deletearena = new deleteArena(repositorioArena);

export class ArenaController {
    static criarArenas (req: Request, res: Response) {
        try {
            const { nome, localizacao} = req.body;
            const arena = criararena.executar(nome, localizacao);
            res.status(201).json(arena);
        } catch (error: any) {
            res.status(400).json({ erro: error.message });
        }   
    }

    static listarArenas (req: Request, res: Response) {
        const arena = repositorioArena.listar();
        res.status(200).json(arena);
    }

    static atualizarArena(req: Request, res: Response){
    try {
      const id = Number(req.params.id);
      const arena = atualizararena.executar(id, req.body);
      res.json(arena);
    } catch (erro: any) {
      res.status(404).json({ mensagem: erro.message });
    }
    }

    static deleteArena(req: Request, res:Response){
    try {
      const id = Number(req.params.id);
      const arena = deletearena.executar(id);
      res.json(arena);
    } catch (erro: any) {
      res.status(404).json({ mensagem: erro.message });
    }
    }

}