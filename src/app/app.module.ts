import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


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
import { EfeitoColaborativoComponent } from './pages/efeito-colaborativo/efeito-colaborativo.component';
import { AbouYouComponent } from './pages/abou-you/abou-you.component';
import { ModalComponent } from './components/modal/modal.component';
import { ModalPublicacaoComponent } from './components/modal-publicacao/modal-publicacao.component';
import { ComentarioComponent } from './components/comentario/comentario.component';
import { CurtirComponent } from './components/curtir/curtir.component';
import { CompartilharComponent } from './components/compartilhar/compartilhar.component';
import { HttpClientModule } from '@angular/common/http';
import { ChunkPipe } from './pipe/chunk.pipe';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';


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
    EfeitoColaborativoComponent,
    AbouYouComponent,
    ModalComponent,
    ModalPublicacaoComponent,
    ComentarioComponent,
    CurtirComponent,
    CompartilharComponent,
    ChunkPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [
    {provide: JWT_OPTIONS, useValue: JWT_OPTIONS},
    JwtHelperService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
