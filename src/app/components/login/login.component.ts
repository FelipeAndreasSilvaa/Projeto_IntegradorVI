import { Component } from '@angular/core';
import { LoginService } from 'src/app/service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  credenciais = {
    email: '',
    senha: '',
  };

  constructor(private loginService: LoginService) {}

  fazerLogin() {
    this.loginService.fazerLogin(this.credenciais).subscribe((response) => {

        console.log('Login bem-sucedido:', response);
      },
      (error) => {

        console.error('Erro ao fazer login:', error);
      }
    );
  }
}
