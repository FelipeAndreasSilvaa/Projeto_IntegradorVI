import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal-publicacao',
  templateUrl: './modal-publicacao.component.html',
  styleUrls: ['./modal-publicacao.component.scss']
})
export class ModalPublicacaoComponent {
  @Output() fecharModalpubli = new EventEmitter<void>();
  @Output() publicacaoFeita = new EventEmitter<{ titulo: string; descricao: string;}>();

  titulo: string = '';
  descricao: string = '';

  publicarLivro() {
    // Simule uma publicação, enviando os dados para o componente pai
    const publicacao = { titulo: this.titulo, descricao: this.descricao };
    this.publicacaoFeita.emit(publicacao);
    this.fecharModalpubli.emit();

    // Limpe os campos após a publicação
    // this.titulo = '';
    // this.descricao = '';
  }
}
