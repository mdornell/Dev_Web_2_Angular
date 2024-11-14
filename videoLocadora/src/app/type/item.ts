import { Titulo } from "./titulo";

export interface Item {
    _id: number;
    numSerie: number;
    dtAquisicao: Date;
    tipoItem: string;
    titulo: Titulo;
}