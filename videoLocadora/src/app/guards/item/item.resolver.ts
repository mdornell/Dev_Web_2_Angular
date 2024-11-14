import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { ItemService } from '../../service/item/item.service';
import { Item } from '../../type/item';

@Injectable({
    providedIn: 'root'
})
export class ItemResolver implements Resolve<Item> {

    constructor(private service: ItemService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Item> {
        if (route.params && route.params['id']) {
            return this.service.listById(route.params['id']);
        }
        return of({
            _id: 0,
            numSerie: 0,
            dtAquisicao: new Date(''),
            tipoItem: '',
            titulo: {
                _id: 0,
                nome: '',
                ano: 0,
                sinopse: '',
                categoria: '',
                ator: [],
                diretor: {
                    _id: 0,
                    nome: ''
                },
                classe: {
                    _id: 0,
                    nome: '',
                    valor: 0,
                    prazoDeDevolucao: new Date(),
                },
            }
        });
    }
};
