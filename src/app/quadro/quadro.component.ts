import { Component, OnInit, HostBinding} from '@angular/core';
import { MarvelService } from '../marvel.service'
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';

@Component({
  selector: 'app-quadro',
  templateUrl: './quadro.component.html',
  styleUrls: ['./quadro.component.scss'],
  providers: [MarvelService],

})
export class QuadroComponent implements OnInit {

  
  quadrado:any;
  xNext:boolean;
  vencedor:string;
  Xvenceu: number;
  Ovenceu: number;
  end: boolean;
  velha: number;
  aux:boolean;
  jogadorX:string;
  jogadorO:string;
  

  constructor(public marvel: MarvelService){}

  isOpen = true;

  toggle() {
    this.isOpen = !this.isOpen;
  }

  ngOnInit(): void {
    this.Xvenceu = 0;
    this.Ovenceu = 0;
    this.end = false;
    this.velha = 0;
    this.aux = false;
    this.newGame()
  }

  newGame(){
    this.quadrado = Array(9).fill(null);
    this.vencedor = null;
    this.xNext = true;
    this.end = false;

    this.velha = 0;
  }
  Jogo(){
    this.aux = true
  }
  getX(X:string){
    this.jogadorX = X;
    console.log(this.jogadorX)
  }
  getO(O:string){
    this.jogadorO = O;
    console.log(this.jogadorO)
  }

  get player(){
    return this.xNext ? 'X' : 'O';
  }

  makeMove(idx: number){
    if(this.end==false){
    if(!this.quadrado[idx]){
      this.quadrado.splice(idx, 1, this.player);
      this.xNext = !this.xNext;
    }

    this.vencedor = this.calculateWinner();
    if(this.vencedor==null){
      this.isOpen = true;
    }
    }
  }

  calculateWinner(){
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    for(let i = 0; i < lines.length; i++){
      const [a,b,c] = lines[i];
      if(
        this.quadrado[a] &&
        this.quadrado[a] == this.quadrado[b] &&
        this.quadrado[a] == this.quadrado[c]
      ){
        if(this.quadrado[a] == 'X'){
          this.Xvenceu++;
        }else if(this.quadrado[a] == 'O'){
          this.Ovenceu++;
        }
        this.end = true;
        return this.quadrado[a];
      }
    }
    this.velha++;
    if(this.velha == 9){
      this.end = true;
    }
    return null;
  }

  

}
