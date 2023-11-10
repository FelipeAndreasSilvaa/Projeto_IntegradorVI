import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { SelectLivrosComponent } from './pages/select-livros/select-livros.component';
import { LidosComponent } from './pages/lidos/lidos.component';
import { LendoComponent } from './pages/lendo/lendo.component';
import { QueroLerComponent } from './pages/quero-ler/quero-ler.component';
import { RelendoComponent } from './pages/relendo/relendo.component';
import { AbandoneiComponent } from './pages/abandonei/abandonei.component';
import { ResenhasComponent } from './pages/resenhas/resenhas.component';
import { CadastroComponent } from './components/cadastro/cadastro.component';
import { LoginComponent } from './components/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SelectLivrosComponent,
    LidosComponent,
    LendoComponent,
    QueroLerComponent,
    RelendoComponent,
    AbandoneiComponent,
    ResenhasComponent,
    CadastroComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
