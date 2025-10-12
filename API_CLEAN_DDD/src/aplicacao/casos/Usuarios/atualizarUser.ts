import { Usuario } from "../../../dominio/User";
import { repoUser } from "../../../persistencia/repoUser";

export class atulizarUser{
    static executar(nome: string) {
        throw new Error("Method not implemented.");
    }
    constructor(private repositorioUser: repoUser){}

    executar(nome: string, dados:any){
        return this.repositorioUser.atulizar(nome, dados);
    }
}
