import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  email: string = '';
  senha: string = '';

  constructor(private loginService: LoginService, private router: Router) {}

  fazerLogin() {
    // Verificar se os campos estão preenchidos
    // if (!this.email || !this.senha) {
    //   alert('Favor preencher os campos.');
    //   return;
    // }

    this.loginService.getLogin(this.email, this.senha).subscribe(
      (response) => {
        // Verificar a resposta do serviço de login
        if (response.success) {
          console.log('Login bem-sucedido', response);

          // Exibir mensagem na interface do usuário
          alert('Login efetuado com sucesso!');

          // Redirecionar para a página de meus livros após 2 segundos
          setTimeout(() => {
            // Substitua '/meusLivros' pela rota desejada
            this.router.navigate(['/home']);
          }, 2000);
        } else {
          // Caso a resposta não seja bem-sucedida
          alert('Dados incorretos.');
        }
      },
      (error) => {
        // Caso ocorra um erro no serviço de login
        console.error('Erro no login', error);
      }
    );
  }

}
