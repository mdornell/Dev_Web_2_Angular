import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Ator } from '../../type/ator';

@Injectable({
  providedIn: 'root'
})
export class AtorService {

    private readonly urlAtor = 'api/ator';

    constructor(private httpCliente: HttpClient) { }

    list() {
        return this.httpCliente.get<Ator[]>(this.urlAtor + '/list');
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

    private create(record: Partial<Ator>) {
        return this.httpCliente.post<Ator>(this.urlAtor + '/add', record).pipe(take(1));
    }

    private update(record: Partial<Ator>) {
        return this.httpCliente.put(this.urlAtor + '/update/' + record._id, record).pipe(take(1));
    }

    remove(record: Ator) {
        return this.httpCliente.delete(this.urlAtor + '/delete/' + record._id).pipe(take(1));
    }
}
