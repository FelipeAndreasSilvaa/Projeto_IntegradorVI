import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http'
import { Observable, BehaviorSubject  } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:3000'; // Altere conforme necessário

  constructor(private http: HttpClient) {}

  getLogin(email: string, senha: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, senha });
  }

}
