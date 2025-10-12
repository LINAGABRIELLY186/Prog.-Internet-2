import { repoPartida } from "../../../persistencia/repoPartidas";
import { Partida } from "../../../dominio/partida";
import { Arena } from "../../../dominio/Arenas";
import { Usuario } from "../../../dominio/User";   

export class criarPartida{
    constructor (private repositorioPartida: repoPartida){}

    executar(nome:string, arena: Arena, usuarios: Usuario[]){
        if (usuarios.length< 2){
            throw new Error ("A partida precisa ter pelo menos 2 usuarios.")
        }

        const partida = new Partida (nome, arena, usuarios);
        return this.repositorioPartida.salvarPartida(partida);
    }
}