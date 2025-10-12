import { repoPartida } from "../../../persistencia/repoPartidas";

export class atualizarPartida{
    static executar(id: number, body: any) {
        throw new Error("Method not implemented.");
    }
    constructor(private repositorioPartida: repoPartida){}

    executar(id: number, dados: any){
        return this.repositorioPartida.atualizarPartida(id, dados);
    }

}