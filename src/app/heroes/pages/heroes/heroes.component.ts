import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Heroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  heroe!: Heroe;

  constructor( private activatedRoute: ActivatedRoute, 
               private heroesService: HeroesService,
               private router: Router) {}

  ngOnInit(): void {
      this.activatedRoute.params
      .pipe(
        switchMap( ({id}) =>  this.heroesService.getHeroePorID(id))
      )
      .subscribe(heroe => this.heroe = heroe);
  }

  return() {
    this.router.navigate(['/heroes/listado']);
  }
}
