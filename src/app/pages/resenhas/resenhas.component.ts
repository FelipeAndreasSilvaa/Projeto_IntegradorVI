import { Component, OnInit } from '@angular/core';
import { ResenhaService } from 'src/app/service/resenha.service';

@Component({
  selector: 'app-resenhas',
  templateUrl: './resenhas.component.html',
  styleUrls: ['./resenhas.component.scss']
})
export class ResenhasComponent implements OnInit{
  livros: any[] = [];
  livrosDivididos: any[] = [];

  constructor(private resenhaService: ResenhaService) {}

  ngOnInit(): void {
    this.carregarLivros();
  }

  carregarLivros(): void {
    this.resenhaService.getLivros().subscribe(data => {
      this.livros = data.livros;
      this.dividirLivros();
    });
  }

  dividirLivros(): void {
    const tamanhoLinha = 3;
    for (let i = 0; i < this.livros.length; i += tamanhoLinha) {
      this.livrosDivididos.push(this.livros.slice(i, i + tamanhoLinha));
    }
  }


}
