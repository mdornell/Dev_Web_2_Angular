import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, take, tap } from 'rxjs';
import { Diretor } from '../model/diretor';

@Injectable({
  providedIn: 'root'
})
export class DiretorService {

    private readonly urlDiretor = 'api/diretor';

    constructor(private httpCliente: HttpClient) { }

    list() {
        return this.httpCliente.get<Diretor[]>(this.urlDiretor + '/list')
            .pipe(
                take(1),
                delay(3000),
                tap(diretores => console.log(diretores))
            )
    }

    save(record: Diretor) {
        console.log(record);
        return this.httpCliente.post(this.urlDiretor + '/add', record).pipe(take(1));
    }
}
