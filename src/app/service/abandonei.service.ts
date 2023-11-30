import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AbandoneiService {

  constructor(private http: HttpClient) { }

  adicionarLivroAbandonado(usuarioId: number, livroId: number): Observable<any> {
    const url = 'http://localhost:3000/livrosUser'; // Atualize com a URL correta do seu servidor

    const dados = {
        user_id: usuarioId,
        livro_id: livroId
    };

    return this.http.post(url, dados);
}

  getLivrosAbandonados(usuarioId: number): Observable<any> {
    const url = `http://localhost:3000/livrosUser?user_id=${usuarioId}`; // Atualize com a URL correta do seu servidor

    return this.http.get(url);
  }

}
