import { Component } from '@angular/core';
import { AbandoneiService } from 'src/app/service/abandonei.service';

@Component({
  selector: 'app-abandonei',
  templateUrl: './abandonei.component.html',
  styleUrls: ['./abandonei.component.scss']
})
export class AbandoneiComponent {

  livrosAbandonados: any[] = [];

  constructor(private abandoneiService: AbandoneiService) {
      // Obter o ID do usuário logado
      const usuarioId = 1; // obter o ID do usuário logado;

      this.abandoneiService.getLivrosAbandonados(usuarioId)
          .subscribe(data => {
              this.livrosAbandonados = data.livrosAbandonados;
          });
  }

}
