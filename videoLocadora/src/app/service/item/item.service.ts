import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs';
import { Item } from '../../type/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

    private readonly urlItem = 'api/item';

    constructor(private httpCliente: HttpClient) { }

    list() {
        return this.httpCliente.get<Item[]>(this.urlItem + '/list');
    }

    listById(id: number) {
        return this.httpCliente.get<Item>(this.urlItem + '/list/' + id).pipe(take(1));
    }

    save(record: Partial<Item>) {
        if (record._id) {
            return this.update(record);
        }
        return this.create(record);
    }

    private create(record: Partial<Item>) {
        return this.httpCliente.post<Item>(this.urlItem + '/add', record).pipe(take(1));
    }

    private update(record: Partial<Item>) {
        return this.httpCliente.put(this.urlItem + '/update/' + record._id, record).pipe(take(1));
    }

    remove(record: Item) {
        return this.httpCliente.delete(this.urlItem + '/delete/' + record._id).pipe(take(1));
    }
}
