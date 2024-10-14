import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { Ator } from '../model/ator';
import { AtorService } from '../services/ator.service';

@Injectable({
    providedIn: 'root'
})
export class AtorResolver implements Resolve<Ator> {
    constructor(private service: AtorService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Ator> {
        if (route.params && route.params['id']) {
            return this.service.listById(route.params['id']);
        }
        return of({ _id: 0, nome: '' });
    }
}
