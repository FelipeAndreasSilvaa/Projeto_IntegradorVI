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
    this.loginService.login(this.email, this.senha).subscribe(
      (response) => {
        if (response.success) {
          console.log('Login bem-sucedido');
          // Adicione redirecionamento para a próxima página
          this.router.navigate(['/home']);
        } else {
          console.log('Credenciais inválidas');
          // Adicione lógica para lidar com falha de login
        }
      },
      (error) => {
        console.error('Erro no login', error);
        // Adicione lógica para lidar com erros de comunicação com o servidor
      }
    );
  }
}
