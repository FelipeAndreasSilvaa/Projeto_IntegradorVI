import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  nomeEscritor: string = '';
  fotoPerfil: string = 'https://img.skoob.com.br/8UHFQoW25XkmTe-MeFUQsaa9rmY=/170x170/center/top/smart/filters:format(jpeg)/https://skoob.s3.amazonaws.com/usuarios/10119929/10119929SK-V11698955719G.jpg';
  exibirModal: boolean = false;
  exibirModalPubli: boolean = false;
  bibliografia: string = ''
  publicacoes: { titulo: string; descricao: string; }[] = [];

  abrirModal() {
    this.exibirModal = true;
  }

  fecharModal() {
    this.exibirModal = false;
  }

  abrirModalPubli() {
    this.exibirModalPubli = false;
  }

  fecharModalpubli() {
    this.exibirModalPubli = true;
  }


  atualizarPerfil(perfilEditado: { nome: string; foto: string; bibliografia: string }) {
    this.nomeEscritor = perfilEditado.nome;
    this.fotoPerfil = perfilEditado.foto;
    this.bibliografia = perfilEditado.bibliografia;
    this.fecharModal();
  }

  adicionarPublicacao(publicacao: { titulo: string; descricao: string; }) {
    this.publicacoes.push(publicacao);
  }

}
