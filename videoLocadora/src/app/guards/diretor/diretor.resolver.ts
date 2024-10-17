import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { DiretorService } from "../../service/diretor/diretor.service";
import { Diretor } from "../../type/diretor";


@Injectable({
    providedIn: 'root'
})
export class DiretorResolver implements Resolve<Diretor> {
    constructor(private service: DiretorService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Diretor> {
        if (route.params && route.params['id']) {
            return this.service.listById(route.params['id']);
        }
        return of({ _id: 0, nome: '' });
    }
}