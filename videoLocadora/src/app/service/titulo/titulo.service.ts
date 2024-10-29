import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Titulo } from '../../type/titulo';

@Injectable({
    providedIn: 'root'
})
export class TituloService {

    private readonly urlTitulo = 'api/titulo';

    constructor(private httpCliente: HttpClient) { }

    list() {
        return this.httpCliente.get<Titulo[]>(this.urlTitulo + '/list');
    }

    listById(id: number) {
        return this.httpCliente.get<Titulo>(this.urlTitulo + '/list/' + id).pipe(take(1));
    }

    save(record: Partial<Titulo>) {
        if (record._id) {
            return this.update(record);
        }
        return this.create(record);
    }

    private create(record: Partial<Titulo>) {
        return this.httpCliente.post<Titulo>(this.urlTitulo + '/add', record).pipe(take(1));
    }

    private update(record: Partial<Titulo>) {
        return this.httpCliente.put(this.urlTitulo + '/update/' + record._id, record).pipe(take(1));
    }

    remove(record: Titulo) {
        return this.httpCliente.delete(this.urlTitulo + '/delete/' + record._id).pipe(take(1));
    }
}
