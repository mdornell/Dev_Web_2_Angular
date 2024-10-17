import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, tap } from 'rxjs';
import { Diretor } from '../../type/diretor';

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
                tap(diretores => console.log(diretores))
            )
    }

    listById(id: number) {
        return this.httpCliente.get<Diretor>(this.urlDiretor + '/list/' + id).pipe(take(1));
    }

    save(record: Partial<Diretor>) {
        if (record._id) {
            return this.update(record);
        }
        return this.create(record);
    }

    private create(record: Partial<Diretor>) {
        return this.httpCliente.post<Diretor>(this.urlDiretor + '/add', record).pipe(take(1));
    }

    private update(record: Partial<Diretor>) {
        return this.httpCliente.put(this.urlDiretor + '/update/' + record._id, record).pipe(take(1));
    }

    remove(id: number) {
        return this.httpCliente.delete(this.urlDiretor + '/delete/' + id).pipe(take(1));
    }
}
