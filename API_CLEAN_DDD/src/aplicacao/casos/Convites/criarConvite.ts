// src/aplicacao/casosDeUso/CriarConvite.ts
import { Convite } from '../../../dominio/Convite';
import { repoConvite } from '../../../persistencia/repoConvites';
export interface CriarConviteInput {
    criadorId: string;
    partidaId: string;
    convidadosIds: string[];
}

export class CriarConvite {
    constructor(private readonly repoConvite: repoConvite) {}

    executar(input: CriarConviteInput, convidadosIds: any): Convite {
        const novoConvite = new Convite(
            input.criadorId,
            input.partidaId,
            input.convidadosIds
        );
        
        this.repoConvite.salvarConvite(novoConvite);

        return novoConvite;
    }
}