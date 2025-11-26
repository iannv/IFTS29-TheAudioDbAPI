import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArtistaService } from '../../services/artista';
import {ArtistResponse} from '../../interfaces/artist.interface';
import { AlbumResponse } from '../../interfaces/album.interface';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, RouterLink, RouterLinkActive],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  searchTerm: string = '';
  errorMessage: string = '';

  constructor(private artistaService: ArtistaService,
    private router: Router) {}

  search(): void {
    if (!this.searchTerm.trim()) {
      return;
    }

    this.errorMessage = '';
  
    console.log("Buscando artista:", this.searchTerm);
  
    this.artistaService.buscarArtista(this.searchTerm).subscribe({
      next: (response: ArtistResponse) => {
        if (response.artists && response.artists.length > 0) {
          const id = response.artists[0].idArtist;
          this.router.navigate(['/artista', id]);
          
          this.searchTerm = ''; 
        } else {
          console.log('No se encontró el artista');
          this.errorMessage = 'No encontramos ningún artista con ese nombre.';
        }
      },
      error: (err) => {
        console.error('Error al conectar con la API:', err);
      }
    });
  }

  limpiarError(): void {
    if (this.errorMessage) {
      this.errorMessage = '';
    }
  }
}
