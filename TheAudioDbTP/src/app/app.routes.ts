import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import {ArtistaPage} from './pages/artista-page/artista-page';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'inicio', component: Inicio },
  { path: 'artista/:id', component: ArtistaPage}
];
