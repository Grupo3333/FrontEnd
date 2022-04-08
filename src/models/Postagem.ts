import Tema from './Tema'
import User from './User';

interface Postagem{
    id: number;
    titulo: string;
    descricao: string;
    imagem: string;
    curtidas: number;
    tema?: Tema | null;
    usuario?: User | null;
}

export default Postagem;