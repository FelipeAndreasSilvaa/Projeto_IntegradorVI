import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LidosService {
  private apiUrl = 'URL_DO_SEU_BACKEND/api/livros';

  constructor(private httpClient: HttpClient) {}

  listarLivrosLidos(lidos: any): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}`);
  }

}
