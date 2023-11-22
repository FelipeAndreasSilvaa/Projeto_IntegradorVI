import { Component } from '@angular/core';
import { CadastroService } from 'src/app/service/cadastro.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent {
  usuarios = {
    nome: '',
    email: '',
    senha: '',
  }

  constructor(private cadastroService: CadastroService) {}

  cadastroDeUsuario(){
    this.cadastroService.cadastroDeUsuario(this.usuarios).subscribe((response)=>{
      console.log("Usuario cadastrado com sucesso!")
    },
    (error)=>{
        console.log("Erro ao cadastrar")
    }
    )
  }

}
