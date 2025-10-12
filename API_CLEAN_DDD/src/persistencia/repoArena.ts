import { Arena } from "../dominio/Arenas";

export class repoArena{
    private arenas: Arena[] = [];

    salvarArena(arena: Arena){
        this.arenas.push(arena);
    }

    listar(){
        return this.arenas;
    }

    atualizarArena(id: number, dados: Partial<Arena>){
            const index = this.arenas.findIndex(a => a.id == id);
            if (index == -1) throw new Error("Arena não encontrada");
            this.arenas[index] = {...this.arenas[index], ...dados};
            return this.arenas[index];
    }
    
    deleteArena(id: number){
            const index = this.arenas.findIndex(a => a.id == id);
            if (index == -1) throw new Error("Arena não encontrada");
            const removida = this.arenas.splice(index, 1)[0];
            return removida;
    }
}