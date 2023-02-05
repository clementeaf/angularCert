import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-search-heroe',
  templateUrl: './search-heroe.component.html',
})
export class SearchHeroeComponent implements OnInit {

  termino: string = '';
  heroes: Heroe[] = [];
  heroeSelected!: Heroe | undefined;


  constructor( private heroesService: HeroesService ) {}

  ngOnInit(): void {

  }

  buscando() {
    this.heroesService.getSugerencias(this.termino)
    .subscribe(heroes => this.heroes = heroes);
  }

  opcionSeleccionada(evento: any) {
    if(!evento.option.value){
      this.heroeSelected = undefined;
      return;
    }
    const heroe: Heroe = evento.option.value;
    this.termino = heroe.superhero;

    this.heroesService.getHeroePorID( heroe.id! )
        .subscribe( heroe => this.heroeSelected = heroe );
  }
}
