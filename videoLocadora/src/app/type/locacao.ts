import { Item } from "./item";

export interface Locacao {
    _id: number;
    dtLocacao: Date;
    dtDevolucaoPre: Date;
    dtDevolucaoEfe: Date;
    valor: number;
    multa: number;
    ItemLocacao: Item;

}