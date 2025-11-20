import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ArtistaService } from '../../services/artista';
import {ArtistResponse} from '../../interfaces/artist.interface';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [FormsModule, RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  searchTerm: string = '';

  constructor(private artistaService: ArtistaService,private router: Router) {}

  search(): void {
    console.log("presionado con : " + this.searchTerm)
    if (this.searchTerm.trim()) {
      this.artistaService.buscarArtista(this.searchTerm).subscribe((response: ArtistResponse) => {
        this.router.navigate(['/artista', response.artists[0].idArtist]);
      });
    } else {
      console.log('El término de búsqueda está vacío.');
    }
  }
}
