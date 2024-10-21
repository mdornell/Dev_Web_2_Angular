import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take, tap } from 'rxjs';
import { Classe } from '../../type/classe';

@Injectable({
  providedIn: 'root'
})
export class ClasseService {

    private apiUrl = '/api/classe';

    constructor(private http: HttpClient) {}
  
    list() {
        return this.http.get<Classe[]>(this.apiUrl + '/list')
        .pipe(
            take(1),
            tap(classes => console.log(classes))
        );
    }

    listById(id: number) {
        return this.http.get<Classe>(this.apiUrl + '/list/' + id).pipe(take(1));
    }

    save(record: Partial<Classe>) {
        if (record._id) {
            return this.update(record);
        }
        return this.create(record);
    }

    private create(record: Partial<Classe>) {
        return this.http.post<Classe>(this.apiUrl + '/add', record).pipe(take(1));
    }

    private update(record: Partial<Classe>) {
        return this.http.put(this.apiUrl + '/update/' + record._id, record).pipe(take(1));
    }

    remove(record: Classe) {
        return this.http.delete(this.apiUrl + '/delete/' + record._id).pipe(take(1));
    }
}
