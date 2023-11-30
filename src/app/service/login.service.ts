import { JwtHelperService } from '@auth0/angular-jwt';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http'
import { Observable, BehaviorSubject  } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private baseUrl = 'http://localhost:3000'; // Altere conforme necessário

  constructor(private http: HttpClient, private jwtHelper: JwtHelperService) {}

  getLogin(email: string, senha: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/login`, { email, senha });
  }

  isTokenExpired(token: string): boolean {
    return this.jwtHelper.isTokenExpired(token);
  }

  isLoggedIn(): boolean {
    const token = localStorage.getItem('token'); // Assumindo que você armazena o token no localStorage
    return token ? !this.isTokenExpired(token) : false;
  }

}
