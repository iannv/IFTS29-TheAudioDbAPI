import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { ArtistaComponent } from './components/artista-component/artista-component';
import { Artistas } from './pages/artistas/artistas';
import { Albumes } from './pages/albumes/albumes';

export const routes: Routes = [
  // Inicio
  { path: '', component: Inicio },
  { path: 'inicio', component: Inicio },

  // Artista
  { path: 'artistas', component: Artistas },
  { path: 'artista/:id', component: ArtistaComponent },

  // Albumes
  { path: 'albumes', component: Albumes },
  { path: 'albumes/:id', component: Albumes },
];
