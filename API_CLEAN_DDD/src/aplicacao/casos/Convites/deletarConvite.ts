import { repoConvite } from "../../../persistencia/repoConvites";

export class DeletarConvite {
    constructor(private readonly repo: repoConvite) {}

    executar(id: string): void {
        const convite = this.repo.buscar_por_id(id);

        if (!convite) {
            throw new Error("Convite não encontrado.");
        }

        this.repo.deleteConvite(id);
    }
}
