import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take, tap } from 'rxjs';
import { Classe } from '../model/classe';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

    private readonly urlClasse = 'api/classe';

    constructor(private httpCliente: HttpClient) { }

    list() {
        return this.httpCliente.get<Classe[]>(this.urlClasse + '/list')
            .pipe(
                take(1),
                delay(3000),
                tap(Classes => console.log(Classes))
            )
    }

    save(record: Classe) {
        console.log(record);
        return this.httpCliente.post(this.urlClasse + '/add', record).pipe(take(1));
    }
}