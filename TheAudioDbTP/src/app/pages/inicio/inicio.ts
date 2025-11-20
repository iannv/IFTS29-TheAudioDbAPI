import { Component, OnInit } from '@angular/core';
import { ArtistaService } from '../../services/artista';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Artist, ArtistResponse } from '../../interfaces/artist.interface';
import { trackService } from '../../services/tracks';
import { Track } from '../../interfaces/track.interface';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio implements OnInit {
  constructor(
    private artistaService: ArtistaService,
    private trackService: trackService,
    private route: ActivatedRoute
  ) {}

  public listaArtistas: Artist[] = [];
  public listaTracks: Track[] = [];

  ngOnInit(): void {
    this.obtenerTop5Artistas();
    this.obtenerTop5Tracks();
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

  public obtenerTop5Tracks() {
    this.trackService.getTrackTop1().subscribe((track) => {
      this.listaTracks.push(track.track[0]);
    });

    this.trackService.getTrackTop2().subscribe((track) => {
      this.listaTracks.push(track.track[0]);
    });

    this.trackService.getTrackTop3().subscribe((track) => {
      this.listaTracks.push(track.track[0]);
    });

    this.trackService.getTrackTop4().subscribe((track) => {
      this.listaTracks.push(track.track[0]);
    });

    this.trackService.getTrackTop5().subscribe((track) => {
      this.listaTracks.push(track.track[0]);
    });
  }
}
