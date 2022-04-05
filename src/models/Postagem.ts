import Tema from './Tema'

interface Postagem{
    id: number;
    titulo: string;
    descricao: string;
    imagem: string;
    curtidas: number;
    tema?: Tema | null
}

export default Postagem;