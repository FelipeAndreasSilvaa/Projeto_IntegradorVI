import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LendoService {

  private apiUrl = 'URL_DO_SEU_BACKEND/api/lendo';

  constructor(private httpClient: HttpClient) {}

  listarLivrosLendo(lendo: any): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}`);
  }
}
