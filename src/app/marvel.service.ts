import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, } from 'rxjs/operators';
import { Md5 } from 'ts-md5/dist/md5';
import { Observable } from 'rxjs';



@Injectable(
  //{providedIn: 'root'}
)
export class MarvelService {

  PrivateKey = '138b1070325798ba8a096240ae8c174ae139a6a5';
  PublicKey = 'ce9ad06420b49c7ae4578d38c8890466';
  TimeStamp = new Date().getTime();
  hash = Md5.hashStr(this.TimeStamp + this.PrivateKey + this.PublicKey);
  URL= `https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=100&ts=${this.TimeStamp}&apikey=${this.PublicKey}&hash=${this.hash}`;
  

  constructor(private http: HttpClient) { }

  getAllCharacters() : Observable<any> {
    return this.http.get<any>(this.URL)
    .pipe(map((data: any) => data.data.results))
  }

  getCharacterByName(name: string) : Observable<any> {
    const URL_OI = `https://gateway.marvel.com:443/v1/public/characters?orderBy=name&nameStartsWith=${name}&ts=${this.TimeStamp}&apikey=${this.PublicKey}&hash=${this.hash}`;
    return this.http.get<any>(URL_OI)
    .pipe(map((data: any) => data.data.results))
  
  }

}