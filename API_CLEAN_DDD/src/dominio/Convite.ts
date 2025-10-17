

export type StatusConvite = 'pendente' | 'aceito' | 'recusado' | 'cancelado';

export class Convite {
    id: string;
    criadorId: string;
    partidaId: string;
    convidadosIds: string[];
    status: StatusConvite;

    constructor(criadorId: string,partidaId: string, convidadosIds: string[]){
        this.id = crypto.randomUUID();
        this.criadorId = criadorId;
        this.partidaId = partidaId;
        this.convidadosIds = convidadosIds;
        this.status = 'pendente';

    }

    aceitar(){
        if (this.status !== 'pendente'){
            throw new Error("O convite nao pode ser aceito, pois não está pendente.")
        }
        this.status = 'aceito'
    }

    recusar() {
        if (this.status !== 'pendente') {
            throw new Error(`Não é possível recusar um convite com status "${this.status}".`);
        }
        this.status = 'recusado';
    }

    cancelar() {
        if (this.status === 'recusado' || this.status === 'cancelado') {
            throw new Error(`Não é possível cancelar um convite com status "${this.status}".`);
        }
        
        this.status = 'cancelado';
    }


}