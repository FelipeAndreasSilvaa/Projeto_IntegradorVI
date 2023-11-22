import { Component } from '@angular/core';
import { QueroLerService } from 'src/app/service/quero-ler.service';

@Component({
  selector: 'app-quero-ler',
  templateUrl: './quero-ler.component.html',
  styleUrls: ['./quero-ler.component.scss']
})
export class QueroLerComponent {
  queroLer = {
    titulo: '',
    autor: '',
  }

  constructor(private queroLerService: QueroLerService) {}

  listarLivrosQueroLer(){
    this.queroLerService.listarLivrosQueroLer(this.queroLer).subscribe((response)=>{

    },
    (error)=>{
      console.log("Não há livros adicionados para voce ler!")
    }
    )
  }
}
