import { Component } from '@angular/core';
import { LidosService } from 'src/app/service/lidos.service';

@Component({
  selector: 'app-lidos',
  templateUrl: './lidos.component.html',
  styleUrls: ['./lidos.component.scss']
})
export class LidosComponent {
  lidos = {
    titulo: '',
    autor: '',
  }

  constructor(private lidosService: LidosService) {}

  listarLivrosLidos(){
    this.lidosService.listarLivrosLidos(this.lidos).subscribe((response)=>{

    },
    (error)=>{
      console.log("Não há livros lidos")
    }
    )
  }

}
