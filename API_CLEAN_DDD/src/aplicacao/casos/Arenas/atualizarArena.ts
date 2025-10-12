import { repoArena } from "../../../persistencia/repoArena";

export class AtualizarArena{
    constructor(private repositorioArena: repoArena){}

    executar(id: number, dados: any){
        return this.repositorioArena.atualizarArena(id, dados);
    }
}