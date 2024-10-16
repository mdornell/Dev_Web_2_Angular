import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, tap } from 'rxjs';
import { Ator } from '../model/ator';

@Injectable({
    providedIn: 'root'
})
export class AtorService {

    private readonly urlAtor = 'api/ator';

    constructor(private httpCliente: HttpClient) { }

    list() {
        return this.httpCliente.get<Ator[]>(this.urlAtor + '/list')
            .pipe(
                take(1),
                // delay(3000),
                tap(atores => console.log(atores))
            )
    }

    listById(id: number) {
        return this.httpCliente.get<Ator>(this.urlAtor + '/list/' + id).pipe(take(1));
    }

    save(record: Partial<Ator>) {
        if (record._id) {
            return this.update(record);
        }
        return this.create(record);
    }

    private update(record: Partial<Ator>) {
        return this.httpCliente.put(this.urlAtor + '/update/' + record._id, record).pipe(take(1));
    }

    private create(record: Partial<Ator>) {
        return this.httpCliente.post<Ator>(this.urlAtor + '/add', record).pipe(take(1));
    }

    remove(id: number) {
        return this.httpCliente.delete(this.urlAtor + '/delete/' + id).pipe(take(1));
    }
}
