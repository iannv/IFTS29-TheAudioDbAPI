import { Component, OnInit } from '@angular/core';
import { ArtistaService } from '../../services/artista';
import { ActivatedRoute } from '@angular/router';
import { Artist, ArtistResponse } from '../../interfaces/artist.interface';

@Component({
  selector: 'app-inicio',
  imports: [],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio implements OnInit {
  constructor(
    private artistaService: ArtistaService,
    private route: ActivatedRoute
  ) {}

  public listaArtistas: Artist[] = [];

  ngOnInit(): void {
    this.obtenerTop5Artistas();
  }

  public obtenerTop5Artistas() {
    this.artistaService.getArtistaTop1().subscribe((artista) => {
      this.listaArtistas.push(artista.artists[0]);
    });

    this.artistaService.getArtistaTop2().subscribe((artista) => {
      this.listaArtistas.push(artista.artists[0]);
    });

    this.artistaService.getArtistaTop3().subscribe((artista) => {
      this.listaArtistas.push(artista.artists[0]);
    });

    this.artistaService.getArtistaTop4().subscribe((artista) => {
      this.listaArtistas.push(artista.artists[0]);
    });

    this.artistaService.getArtistaTop5().subscribe((artista) => {
      this.listaArtistas.push(artista.artists[0]);
    });
  }
}
