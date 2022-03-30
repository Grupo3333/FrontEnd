interface UserLogin {
    id: number;
    nome: string;
    usuario: string;
    senha: string;
    perfil: string;
    foto: string;
    token?: string | null
}

export default UserLogin;