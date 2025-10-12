import { Partida } from "../dominio/partida";

export class repoPartida{
    private partidas: Partida[] = [];

    salvarPartida (partida: Partida){
        this.partidas.push(partida);
    }

    listarPartida(){
        return this.partidas;
    }

    atualizarPartida(id: number, dados: Partial<Partida>){
        const index = this.partidas.findIndex(p => p.id == id);
        if (index == -1) throw new Error("Partida não encontrada");
        this.partidas[index] = {...this.partidas[index], ...dados};
        return this.partidas[index];
    }

    deletePartida(id: number){
        const index = this.partidas.findIndex(p => p.id == id);
        if (index == -1) throw new Error("Partida não encontrada");
        const removida = this.partidas.splice(index, 1)[0];
        return removida;
    }
}