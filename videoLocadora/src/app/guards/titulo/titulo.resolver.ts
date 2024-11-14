import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, MaybeAsync, Resolve, RouterStateSnapshot } from '@angular/router';
import { of } from 'rxjs';
import { TituloService } from '../../service/titulo/titulo.service';
import { Titulo } from '../../type/titulo';

@Injectable({
    providedIn: 'root'
})
export class TituloResolver implements Resolve<Titulo> {

    constructor(private service: TituloService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<Titulo> {
        if (route.params && route.params['id']) {
            return this.service.listById(route.params['id']);
        }
        return of({
            _id: 0,
            nome: '',
            descricao: '',
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
            itens: []
        });
    }



};
