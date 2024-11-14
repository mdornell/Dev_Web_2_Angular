import { Ator } from "./ator";
import { Classe } from "./classe";
import { Diretor } from "./diretor";

export interface Titulo {
    _id: number;
    nome: string;
    ano: number;
    sinopse: string;
    categoria: string;
    ator: Array<Ator>;
    diretor: Diretor;
    classe: Classe;
}