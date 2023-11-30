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

adicionarLivroAbandonado2(usuarioId: number, livro: any): Observable<any> {
  const url2 = 'http://localhost:3000/livrosPego'; // Atualize com a rota correta

  const dados2 = {
    user_id: usuarioId,
    product_id: livro.Id,
    title: livro.Title,
    time: livro.review_time,
    score: livro.review_score
  };

  return this.http.post(url2, dados2);
}

  getLivrosAbandonados(usuarioId: number): Observable<any> {
    const url = `http://localhost:3000/livrosUser?user_id=${usuarioId}`; // Atualize com a URL correta do seu servidor

    return this.http.get(url);
  }

}
