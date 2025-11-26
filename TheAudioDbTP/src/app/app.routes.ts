import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio.component';
import { ArtistaComponent } from './components/artista-detalle/artista-detalle.component';
import { Artistas } from './pages/artistas/artistas.component';
import { Albumes } from './pages/albumes/albumes.component';

export const routes: Routes = [
  // Inicio
  { path: '', component: Inicio },
  { path: 'inicio', component: Inicio },

  // Artista
  { path: 'artistas', component: Artistas },
  { path: 'artista/:id', component: ArtistaComponent },

  // Albumes
  { path: 'albumes', component: Albumes },
  { path: 'albumes/:artistId/:albumId', component: Albumes },
];
