import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http'
import { Observable, BehaviorSubject  } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private apiUrl = 'http://localhost:3000'; // Altere conforme necessário

  constructor(private http: HttpClient) {}

  login(email: string, senha: string): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Basic ' + btoa(`${email}:${senha}`),
    });

    return this.http.get(`${this.apiUrl}/login`, { headers });
  }

}
