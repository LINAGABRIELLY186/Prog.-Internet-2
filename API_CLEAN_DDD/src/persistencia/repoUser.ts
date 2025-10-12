import { Usuario } from "../dominio/User";


export class repoUser{
    private usuarios: Usuario[] = [];
    
    salvar(usuario: Usuario){
        this.usuarios.push(usuario);
    }

    listar(){
        return this.usuarios;
    }
    atulizar(nome: string, dados: Partial<Usuario>){
        const index = this.usuarios.findIndex( u => u.nome == nome);
        if (index == -1){
            throw new Error("Usuario nao encontrado");
        }
        this.usuarios[index] = {...this.usuarios[index], ...dados};
        return this.usuarios[index];
    }

    delete(nome: string){
        const index = this.usuarios.findIndex( u => u.nome == nome);
        if (index == -1){
            throw new Error("Usuario nao encontrado");
        }
        const removida = this.usuarios.splice(index, 1)[0];
         return  removida;
    }
}

