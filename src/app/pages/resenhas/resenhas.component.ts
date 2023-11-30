import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AbandoneiService } from 'src/app/service/abandonei.service';
import { ResenhaService } from 'src/app/service/resenha.service';

@Component({
  selector: 'app-resenhas',
  templateUrl: './resenhas.component.html',
  styleUrls: ['./resenhas.component.scss']
})
export class ResenhasComponent implements OnInit{
  livros: any[] = [];
  livrosDivididos: any[] = [];
  // user_id: number = ;

  constructor(private resenhaService: ResenhaService, private router: Router, private abandoneiService: AbandoneiService) {}

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

  pegarLivro(livroId: number): void {
    // Você precisará obter o ID do usuário logado
    const usuarioId = 1 // obter o ID do usuário logado;

    this.abandoneiService.adicionarLivroAbandonado(usuarioId, livroId)
        .subscribe(() => {
            // Aqui você pode adicionar lógica adicional se necessário
            console.log(usuarioId)
            console.log(`Livro ${livroId} adicionado aos abandonados.`);
        });
}
  // pegarLivro(livroId: number, user_id: number): void {
  //   // Redirecione para a página de "Meus Livros" com referência ao livro e usuário
  //   this.router.navigate(['/meus-livros'], { queryParams: { livroId, user_id } });
  // }

}
