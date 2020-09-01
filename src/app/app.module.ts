import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuadradoComponent } from './quadrado/quadrado.component';
import { QuadroComponent } from './quadro/quadro.component';
import { HttpClientModule } from '@angular/common/http';
import { PersonagensComponent } from './personagens/personagens.component';
import { FormsModule } from '@angular/forms';
import { MarvelService } from './marvel.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Md5 } from 'ts-md5/dist/md5';




@NgModule({
  declarations: [
    AppComponent,
    QuadradoComponent,
    QuadroComponent,
    PersonagensComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserModule,
    BrowserAnimationsModule
  ],
  providers: [MarvelService,Md5],
  bootstrap: [AppComponent]
})
export class AppModule { }
