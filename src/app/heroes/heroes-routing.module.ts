import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddHeroeComponent } from './pages/add-heroe/add-heroe.component';
import { HeroesComponent } from './pages/heroes/heroes.component';
import { HomeComponent } from './pages/home/home.component';
import { ListHeroesComponent } from './pages/list-heroes/list-heroes.component';
import { SearchHeroeComponent } from './pages/search-heroe/search-heroe.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {path: 'listado', component: ListHeroesComponent},
      {path: 'agregar', component: AddHeroeComponent},
      {path: 'editar/:id', component: AddHeroeComponent},
      {path: 'buscar', component: SearchHeroeComponent},
      {path: ':id', component: HeroesComponent},
      {path: '**', redirectTo: 'listado'},
    ]
  }
]

@NgModule({
  imports: [
    RouterModule.forChild( routes ),
  ],
  exports: [
    RouterModule
  ]
})
export class HeroesRoutingModule { }
