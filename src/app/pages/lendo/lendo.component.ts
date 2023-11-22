import { Component } from '@angular/core';
import { LendoService } from 'src/app/service/lendo.service';

@Component({
  selector: 'app-lendo',
  templateUrl: './lendo.component.html',
  styleUrls: ['./lendo.component.scss']
})
export class LendoComponent {
  lendo = {
    titulo: '',
    autor: '',
  }

  constructor(private lendoService: LendoService) {}

  listarLivroslendo(){
    this.lendoService.listarLivrosLendo(this.lendo).subscribe((response)=>{

    },
    (error)=>{
      console.log("Não há livros lidos")
    }
    )
  }
}
