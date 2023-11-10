import { LidosComponent } from './pages/lidos/lidos.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LendoComponent } from './pages/lendo/lendo.component';
import { QueroLerComponent } from './pages/quero-ler/quero-ler.component';
import { RelendoComponent } from './pages/relendo/relendo.component';
import { AbandoneiComponent } from './pages/abandonei/abandonei.component';
import { ResenhasComponent } from './pages/resenhas/resenhas.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', component: LoginComponent},//ota padrao
  {path: 'cadastro', component: CadastroComponent},
  {path: 'home', component: HomeComponent},
  {path: 'lidos', component: LidosComponent },
  {path: 'lendo', component: LendoComponent },
  {path: 'quero-ler', component: QueroLerComponent },
  {path: 'relendo', component: RelendoComponent },
  {path: 'abandonei', component: AbandoneiComponent },
  {path: 'resenhas', component: ResenhasComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }