import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';  // Certifique-se de que os tipos de retorno estejam corretos

@Injectable({
  providedIn: 'root'
})
export class AtorService {
  private apiUrl = 'http://localhost:4200/api/ator';  // Defina a URL da API

  constructor(private http: HttpClient) {}

  salvar(ator: FormGroup): Observable<FormGroup> {
    return this.http.post<FormGroup>(this.apiUrl, ator);  // Passe o objeto `ator` diretamente, não o `FormGroup`
  }
}
