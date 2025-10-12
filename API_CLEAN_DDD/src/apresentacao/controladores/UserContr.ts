import {Request, Response} from "express";
import { criarUser } from "../../aplicacao/casos/Usuarios/criarUser";
import { repoUser } from "../../persistencia/repoUser";
import { atulizarUser} from "../../aplicacao/casos/Usuarios/atualizarUser";
import { deleteUser } from "../../aplicacao/casos/Usuarios/deleteUser";

const repositorio = new repoUser();
const criarUsuario = new criarUser(repositorio);

export class UserController {
    
    static criar (req: Request, res: Response) {
        try {
            const { nome, email, idade, categoria } = req.body;
            const usuario = criarUsuario.executar(nome, email, idade, categoria);
            res.status(201).json(usuario);
        } catch (error: any) {
            res.status(400).json({ erro: error.message });
        }   
    }

    static listar (req: Request, res: Response) {
        const usuarios = repositorio.listar();
        res.status(200).json(usuarios);
    }

    static atulizar(req: Request, res: Response){
        try{
            const nome = String(req.params.nome);
            const usuario = atulizarUser.executar(nome);
            res.json(usuario);
        }catch (erro: any)
        {
            res.status(404).json({ erro: erro.message });
        }
    }


    static delete(req: Request, res: Response){
        try{
            const nome = String(req.params.nome);
            const usuario = deleteUser.executar(nome);
            res.json(usuario);
        }catch (erro: any)
        {
            res.status(404).json({mensagem: erro.message });
        }
    }
}

