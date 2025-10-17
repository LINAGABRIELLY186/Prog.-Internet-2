// src/aplicacao/casosDeUso/AtualizarConvite.ts
import { repoConvite } from "../../../persistencia/repoConvites";
import { Convite, StatusConvite } from "../../../dominio/Convite";

export interface AtualizarConviteInput {
    id: string;
    status?: StatusConvite;
    convidadosIds?: string[];
}

export class AtualizarConvite {
    constructor(private readonly repo: repoConvite) {}

    executar(id: string, input: AtualizarConviteInput): Convite {
        const conviteExistente = this.repo.buscar_por_id(input.id);

        if (!conviteExistente) {
            throw new Error("Convite não encontrado.");
        }

        if (input.status) conviteExistente.status = input.status;
        if (input.convidadosIds) conviteExistente.convidadosIds = input.convidadosIds;

        this.repo.atualizarConvite(conviteExistente);

        return conviteExistente;
    }
}
