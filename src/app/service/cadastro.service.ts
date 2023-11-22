import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CadastroService {
  private apiUrl = 'URL_DO_SEU_BACKEND/api/cadastro';

  constructor(private httpClient: HttpClient) {}

  cadastroDeUsuario(usuarios: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}`, usuarios)
  }
}
