import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private apiUrl = 'URL_DO_SEU_BACKEND/api/login';

  constructor(private httpClient: HttpClient) { }

  fazerLogin(credenciais: any): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUrl}`, credenciais);
  }
}
