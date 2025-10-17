import { Convite } from "../dominio/Convite";

export class repoConvite{
    private convites: Convite[]=[];

    salvarConvite(convite: Convite){
        this.convites.push(convite);
    }

    listarConvite(){
        return this.convites;
    }

    buscar_por_id(id: string){
        return this.convites.find(c=> c.id == id );
    }

    deleteConvite(id: string){
            const index = this.convites.findIndex(c => c.id == id);
            if (index == -1) throw new Error("Convite não encontrada");
            const removido = this.convites.splice(index, 1)[0];
            return removido;
    }

    atualizarConvite(convite: Convite): void {
        const index = this.convites.findIndex(c => c.id === convite.id);
        if (index !== -1) {
            this.convites[index] = convite;
        }
    }


}