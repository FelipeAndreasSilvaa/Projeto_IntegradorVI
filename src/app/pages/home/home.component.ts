import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  nomeEscritor: string = '';
  fotoPerfil: string = '';
  exibirModal: boolean = false;
  exibirModalPubli: boolean = false;
  bibliografia: string = ''
  publicacoes: { titulo: string; descricao: string; }[] = [];


  ngOnInit() {
    // Recupera as informações do perfil do localStorage
    const perfilSalvo = localStorage.getItem('perfil');

    // Se houver informações salvas, atualiza as propriedades
    if (perfilSalvo) {
      const perfil = JSON.parse(perfilSalvo);
      this.nomeEscritor = perfil.nome;
      this.fotoPerfil = perfil.foto;
    }
  }

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


  atualizarPerfil(perfilEditado: { nome: string; foto: string }) {
    this.nomeEscritor = perfilEditado.nome;
    this.fotoPerfil = perfilEditado.foto;

    this.salvarPerfilLocalmente(perfilEditado); // Adicione essa linha para salvar localmente
    this.fecharModal();
  }

  salvarPerfilLocalmente(perfil: { nome: string; foto: string }) {
    // Simplesmente salva no localStorage para fins de demonstração
    localStorage.setItem('perfil', JSON.stringify(perfil));
  }



}
