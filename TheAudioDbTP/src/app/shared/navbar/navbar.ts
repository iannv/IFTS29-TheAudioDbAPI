import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArtistaService } from '../../services/artista';
import { AlbumesService } from '../../services/albumes';
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
  searchType: 'artist' | 'album' = 'artist';

  constructor(private artistaService: ArtistaService,
    private albumesService: AlbumesService,
    private router: Router) {}

  search(): void {
    if (!this.searchTerm.trim()) {
      return;
    }

    if (this.searchType === 'artist') {
      // *** BÚSQUEDA DE ARTISTA ***
      this.artistaService.buscarArtista(this.searchTerm).subscribe({
        next: (response: ArtistResponse) => {
          if (response.artists && response.artists.length > 0) {
            this.router.navigate(['/artista', response.artists[0].idArtist]);
          } else {
            console.log('No se encontró el artista');
          }
        },
        error: (err) => console.error(err)
      });

    } else {
      // *** BÚSQUEDA DE ÁLBUM ***
      this.albumesService.buscarAlbumPorNombre(this.searchTerm).subscribe({
        next: (response: AlbumResponse) => {
          if (response.album && response.album.length > 0) {
            const albumEncontrado = response.album[0];
            this.router.navigate(['/albumes', albumEncontrado.idArtist, albumEncontrado.idAlbum]);
          } else {
            console.log('No se encontró el álbum');
          }
        },
        error: (err) => console.error(err)
      });
    }
  }
}
