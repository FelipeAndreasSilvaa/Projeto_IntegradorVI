import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http'
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ResenhaService {
  private baseUrl = 'http://localhost:3000/livros'; // Atualize com a URL correta do seu servidor

  constructor(private http: HttpClient) { }

  getLivros(): Observable<any> {
    return this.http.get(this.baseUrl);
  }

}
