import { Component } from '@angular/core';
import { AbandoneiService } from 'src/app/service/abandonei.service';

@Component({
  selector: 'app-abandonei',
  templateUrl: './abandonei.component.html',
  styleUrls: ['./abandonei.component.scss']
})
export class AbandoneiComponent {

  livrosAbandonados: any[] = [];

  constructor(private abandoneiService: AbandoneiService) { }

  ngOnInit(): void {
    this.carregarLivrosAbandonados();
  }

  carregarLivrosAbandonados(): void {
    const usuarioId = 1; // substitua pelo ID real do usuário logado

    this.abandoneiService.getLivrosAbandonados(usuarioId)
      .subscribe(data => {
        this.livrosAbandonados = data.livrosAbandonados;
      });
  }

  marcarComoAbandonado(livroId: number, livro: any): void {
    const usuarioId = 1; // substitua pelo ID real do usuário logado

    this.abandoneiService.adicionarLivroAbandonado(usuarioId, livroId)
      .subscribe(() => {
        console.log(`Livro ${livroId} marcado como abandonado e salvo no banco de dados.`);

        this.carregarLivrosAbandonados();
      });

    this.abandoneiService.adicionarLivroAbandonado2(usuarioId, livro)
      .subscribe(() => {
        console.log(`Livro ${livro} marcado como abandonado e salvo no banco de dados.`);
        this.carregarLivrosAbandonados();
      });
  }
}
