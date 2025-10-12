import { repoPartida } from "../../../persistencia/repoPartidas";

export class deletePartida{
    static executar(id: number) {
        throw new Error("Method not implemented.");
    }
    constructor(private repositorioPartoda: repoPartida){}

    executar(id: number, dados: any){
        return this.repositorioPartoda.deletePartida(id);
    }

}