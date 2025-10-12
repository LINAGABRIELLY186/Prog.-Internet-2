import { repoArena } from "../../../persistencia/repoArena";

export class deleteArena{
    constructor(private repositorioArena: repoArena){}

    executar(id: number){
        return this.repositorioArena.deleteArena(id);
    }
}