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
  mensagemErro: string = '';
  mensagemSucesso: string = '';

  constructor(private loginService: LoginService, private router: Router) {}


   fazerLogin() {
     const email = this.email; // Acesse as propriedades corretas do componente
     const senha = this.senha;

     // Agora você pode chamar o serviço para fazer a solicitação HTTP e verificar o login
    this.loginService.getLogin(email, senha).subscribe(
      (response) => {
        if (response.success) {
          this.mensagemSucesso = 'Login efetuado com sucesso!';
          // localStorage.setItem('token', response.token);
          // Redirecionar para a página de meus livros após 2 segundos
         setTimeout(() => {
           this.router.navigate(['/home']);
         }, 2000);
       } else {
        this.mensagemErro = 'Credenciais inválidas!';
       }
     },
     (error) => {
       console.error('Erro no login', error);
     }
   );
 }



}
