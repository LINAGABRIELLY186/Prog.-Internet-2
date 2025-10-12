import { Usuario } from "../../../dominio/User";
import { repoUser } from "../../../persistencia/repoUser";

export class criarUser{
    constructor(private repositorio: repoUser){}  

    executar(nome: string, email: string, idade: number, categoria: string){
        if (!nome || !email){
            throw new Error("Nome e email são obrigatórios");
        }

        if (idade < 0){
            throw new Error("Idade invalida");
        }

        const usuario = new Usuario(nome, email, idade, categoria);
        this.repositorio.salvar(usuario);
        return usuario;
    }
}
