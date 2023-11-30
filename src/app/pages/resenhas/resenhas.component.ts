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
  pegarLivro(livroId: number, livros: any): void {
    const usuarioId = 1; // Substitua pelo ID real do usuário logado

    if (livroId) {
        // Envia a solicitação para adicionar o livro abandonado
        this.abandoneiService.adicionarLivroAbandonado(usuarioId, livroId)
            .subscribe(() => {
                console.log(`Livro ${livroId} marcado como abandonado e salvo no banco de dados.`);
                // Adicione qualquer lógica adicional necessária após marcar como abandonado
                // Por exemplo, você pode querer recarregar a lista de livros abandonados
            });

        this.abandoneiService.adicionarLivroAbandonado2(usuarioId, this.livros.find(livro => livro.Id === livroId))
            .subscribe(() => {
                console.log(`Livro ${livroId} marcado como abandonado e salvo no banco de dados.`);
                // Adicione qualquer lógica adicional necessária após marcar como abandonado
                // Por exemplo, você pode querer recarregar a lista de livros abandonados
            });
    } else {
        console.error("ID do livro é indefinido.");
    }
}


  // pegarLivro(livroId: number, user_id: number): void {
  //   // Redirecione para a página de "Meus Livros" com referência ao livro e usuário
  //   this.router.navigate(['/meus-livros'], { queryParams: { livroId, user_id } });
  // }

}
