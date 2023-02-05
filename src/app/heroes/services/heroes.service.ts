import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { enviorement } from 'src/enviorements/enviorement';

import { Heroe } from '../interfaces/heroes.interface';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = enviorement.baseUrl;

  constructor(  private http: HttpClient ) { }

  getHeroes(): Observable<Heroe[]>{
    return this.http.get<Heroe[]>(`${ this.baseUrl }/heroes`);
  }

  getHeroePorID( id: string ):Observable<Heroe>{
    return this.http.get<Heroe>(`${ this.baseUrl }/heroes/${id}`)
  }

  getSugerencias( termino: string): Observable<Heroe[]> {
    return this.http.get<Heroe[]>(`${this.baseUrl}/heroes?q=${termino}&_limit=6`);
  }

  addHero(hero: Heroe): Observable<Heroe> {
    return this.http.post<Heroe>(`${ this.baseUrl }/heroes`, hero );
  }

  editHero(hero: Heroe): Observable<Heroe> {
    return this.http.put<Heroe>(`${ this.baseUrl }/heroes/${hero.id}`, hero );
  }

  deleteHero(id: string): Observable<any> {
    return this.http.delete<any>(`${ this.baseUrl }/heroes/${id}` );
  }
}
