import {Request, Response} from "express";
import { repoConvite } from "../../persistencia/repoConvites";
import { CriarConvite } from "../../aplicacao/casos/Convites/criarConvite";
import { AtualizarConvite } from "../../aplicacao/casos/Convites/atualizarConvite";
import { DeletarConvite } from "../../aplicacao/casos/Convites/deletarConvite";

const repositorioConvite = new repoConvite();
const criarConvite = new CriarConvite(repositorioConvite);
const atualizarConvite = new AtualizarConvite(repositorioConvite);
const deletarConvite = new DeletarConvite(repositorioConvite);

export class ConviteController {
  static criarConvite(req: Request, res: Response) {
    try {
      const { criadorId, convidadosIds } = req.body;
      const convite = criarConvite.executar(criadorId, convidadosIds);
      res.status(201).json(convite);
    } catch (error: any) {
      res.status(400).json({ erro: error.message });
    }
  }

  static listarConvite(req: Request, res: Response) {
    const convites = repositorioConvite.listarConvite();
    res.status(200).json(convites);
  }

  static atualizarConvite(req: Request, res: Response) {
    try {
      const id = req.params.id;
      const conviteAtualizado = atualizarConvite.executar(id, req.body);
      res.json(conviteAtualizado);
    } catch (erro: any) {
      res.status(404).json({ mensagem: erro.message });
    }
  }

  static deleteConvite(req: Request, res: Response) {
    try {
      const id = req.params.id;
      deletarConvite.executar(id);
      res.status(204).send();
    } catch (erro: any) {
      res.status(404).json({ mensagem: erro.message });
    }
  }
}