import { Component, TestabilityRegistry } from '@angular/core';
import { MarvelService } from './marvel.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [MarvelService]
})
export class AppComponent {
  title = 'jogo-da-velha';
  c:boolean;
  personagens:any = [];

  constructor(public marvel: MarvelService){}

  ngOnInit(){
    //this.c = false;
    //this.getPersonagens();
    
  }
/*
  async getPersonagens(){
    this.marvel.getAllCharacters().subscribe(
     res => {
      console.log(res);
      this.personagens = res;
      return this.testando()
    });
  }

  testando(){
    this.c=true;
    console.log(this.personagens[0].thumbnail.path)
  }*/

}
