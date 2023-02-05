import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { HeroesRoutingModule } from './heroes-routing.module';
import { MaterialModule } from '../material/material.module';

import { AddHeroeComponent } from './pages/add-heroe/add-heroe.component';
import { SearchHeroeComponent } from './pages/search-heroe/search-heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListHeroesComponent } from './pages/list-heroes/list-heroes.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HeroeCardComponent } from './components/heroe-card/heroe-card.component';
import { ImagesPipe } from './pipes/images.pipe';


@NgModule({
  declarations: [
    AddHeroeComponent,
    SearchHeroeComponent,
    HomeComponent,
    ListHeroesComponent,
    HeroesComponent,
    HeroeCardComponent,
    ImagesPipe
  ],
  imports: [
    CommonModule,
    HeroesRoutingModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HeroesModule { }
