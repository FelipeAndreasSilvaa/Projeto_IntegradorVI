import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Output() fecharModal = new EventEmitter<void>();
  @Output() salvarPerfil = new EventEmitter<{ nome: string; foto: string; bibliografia: string; }>();

  novoNome: string = '';
  novaFoto: string = '';
  novaBibliografia: string = ''

  salvarPerfilEditado() {
    const perfilEditado = { nome: this.novoNome, foto: this.novaFoto, bibliografia: this.novaBibliografia };
    this.salvarPerfil.emit(perfilEditado);
    this.fecharModal.emit();
  }
}
