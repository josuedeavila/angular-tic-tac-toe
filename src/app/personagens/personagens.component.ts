import { Component, EventEmitter, Output, OnInit, TestabilityRegistry } from '@angular/core';
import { MarvelService } from '../marvel.service'


@Component({
  selector: 'app-personagens',
  templateUrl: './personagens.component.html',
  styleUrls: ['./personagens.component.scss'],
  providers: [MarvelService]
})
export class PersonagensComponent implements OnInit {
  personagem:any=[]
  jogadorX:any = [];
  jogadorO:any = [];
  escolha:boolean;
  @Output() j = new EventEmitter<boolean>();
  @Output() X = new EventEmitter<Array<any>>();
  @Output() O = new EventEmitter<Array<any>>();
  jogar:boolean;

  constructor(public marvel: MarvelService) { }

  ngOnInit(){
    this.jogar= false;
    this.escolha = false;
    this.getPersonagens();
  }

  confirmarEscolha(){
    if(this.jogadorX!="" && this.jogadorO!="")
    this.escolha = true;
  }

  iniciarJogo(){
    this.X.emit(this.jogadorX[0])
    this.O.emit(this.jogadorO[0])
    this.j.emit(true);
    this.jogar = true;
  }

  async getPersonagens(){
    this.marvel.getAllCharacters().subscribe(
     res => {
      console.log(res);
      this.personagem = res;
    });
  }

 getJogadorX(query: string) {
    this.marvel.getCharacterByName(query)
        .subscribe(characters => {
            this.jogadorX= characters;
            console.log(this.jogadorX[0].name)
        });
  }

  getJogadorO(query: string) {
    this.marvel.getCharacterByName(query)
        .subscribe(perso => {
            this.jogadorO= perso;
            console.log(this.jogadorO)
        });
  }

}
