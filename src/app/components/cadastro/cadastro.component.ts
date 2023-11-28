import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CadastroService } from 'src/app/service/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  nome: string = '';
  email: string = '';
  senha: string = '';
  mensagemErro: string = '';
  mensagemSucesso: string = '';

  constructor(private cadastroService: CadastroService, private router: Router) {}

  private validarSenha(): boolean {
    // Adicione sua lógica de validação aqui
    // Exemplo: a senha deve ter pelo menos 6 caracteres e conter pelo menos um símbolo
    if (this.senha.length < 6 || !/[!@#$%^&*(),.?":{}|<>]/.test(this.senha)) {
      this.mensagemErro = 'O campo senha deve ter pelo menos 6 caracteres com pelo menos 1 símbolo.';
      return false; // Retorna falso se a validação falhar
    }
    return true; // Retorna verdadeiro se a validação for bem-sucedida
  }

  cadastrar() {
    this.mensagemErro = '';
    if (this.validarSenha()) {
      this.cadastroService.cadastrarUsuario(this.nome, this.email, this.senha).subscribe(
        (response) => {
          this.mensagemSucesso = 'Cadastro realizado com sucesso.';
          setTimeout(() => {
            this.router.navigate(['/efeito-colaborativo']);
          }, 2000);
        },
        (error) => {
          this.mensagemErro = 'Erro ao cadastrar usuário.';
          // console.error('Erro ao cadastrar usuário', error);
        }
      );
    } else {
      console.log('Preencha todos os campos corretamente');
      // Adicione lógica para informar ao usuário que é necessário preencher todos os campos corretamente
      // Por exemplo, você pode exibir uma mensagem de erro na tela
      this.mensagemErro = 'Preencha todos os campos corretamente.';
    }
  }


  // mostrarMensagem(tipo: string) {
  //   // Chame a função JavaScript para mostrar a mensagem
  //   (window as any).mostrarMensagem(tipo);
  // }
}
