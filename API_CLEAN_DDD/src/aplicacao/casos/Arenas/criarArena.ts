import { Arena } from "../../../dominio/Arenas";
import { repoArena } from "../../../persistencia/repoArena";

export class criarArena{
    constructor(private repositorioArena: repoArena){}

    executar(nome:string, localizacao:string){
        if (!nome || !localizacao){
            throw new Error("Nome e localizacao são obrigatórios");
        }

        const arena = new Arena(Date.now(), nome, localizacao);
        this.repositorioArena.salvarArena(arena);
        return arena;
    }

}