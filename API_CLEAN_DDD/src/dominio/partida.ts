import { Usuario } from "./User";
import { Arena } from "./Arenas";

export class Partida{
    public id: number;
    public nome: string;
    public arena: Arena;
    public usuarios: Usuario[];

    constructor(nome: string, arena: Arena, usuarios: Usuario[]){
        this.id = Date.now();
        this.nome = nome;
        this.arena = arena;
        this.usuarios = usuarios;

    }
}