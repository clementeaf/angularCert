import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Heroe, Publisher } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { switchMap } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-heroe',
  templateUrl: './add-heroe.component.html',
})
export class AddHeroeComponent implements OnInit {

  heroeForm!: FormGroup;
  myField = new FormControl();

  publishers = [
    {
      id: "DC Comics",
      desc: "DC - Comics"
    },
    {
      id: "Marvel Comics",
      desc: "Marvel - Comics"
    }
  ];

  heroe: Heroe = {
    superhero: "",
    alter_ego: "",
    characters: "",
    first_appearance: "",
    publisher: Publisher.DCComics,
    alt_img: "",
  }

  constructor(private heroeService: HeroesService,
              private activatedRoute: ActivatedRoute,
              private router: Router,
              private snackBar: MatSnackBar) {}

  ngOnInit(): void {

    this.myField

    if(!this.router.url.includes('editar')){
      return;
    }
    this.activatedRoute.params
      .pipe(
        switchMap(({id}) => this.heroeService.getHeroePorID(id))
      )
      .subscribe(heroe => this.heroe = heroe);

  }

  guardar() {
    if(this.heroe.superhero.trim().length === 0){
      return;
    }

    if(this.heroe.id){
      this.heroeService.editHero( this.heroe )
      .subscribe( hero => 
        this.mostrarSnackBar('Registro actualizado'));
    } else {
      this.heroeService.addHero( this.heroe )
      .subscribe( heroe => {
        this.router.navigate(['/heroes/editar', heroe.id]);
        this.mostrarSnackBar('Registro actualizado');
      })
    }
  }

  borrarHeroe () {
    this.heroeService.deleteHero(this.heroe.id!).subscribe(resp => {
      this.router.navigate(['/heroes']);
    })
  }

  mostrarSnackBar(message: string): void{

    this.snackBar.open(message, 'ok!', {
      duration: 2500,
    });

  }

}
