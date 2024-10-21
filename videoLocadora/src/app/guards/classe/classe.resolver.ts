import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";
import { Observable, of } from "rxjs";
import { ClasseService } from "../../service/classe/classe.service";
import { Classe } from "../../type/classe";

@Injectable({
    providedIn: 'root'
})
export class ClasseResolver implements Resolve<Classe> {
    
    constructor(private service: ClasseService) {}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Classe> {
        if (route.params && route.params['id']) {
            return this.service.listById(route.params['id']);
        }
        return of({ _id: 0, nome: '' , valor: 0, prazoDeDevolucao: new Date() });
    }
}