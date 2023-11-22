import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class QueroLerService {
  private apiUrl = 'URL_DO_SEU_BACKEND/api/lendo';

  constructor(private httpClient: HttpClient) { }

  listarLivrosQueroLer(queroLer: any): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.apiUrl}`);
  }
}
