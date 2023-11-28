import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  cadastrarUsuario(nome: string, email: string, senha: string) {
    const dadosUsuario = { nome, email, senha };
    return this.http.post(`${this.baseUrl}/cadastro`, dadosUsuario);
  }
}
