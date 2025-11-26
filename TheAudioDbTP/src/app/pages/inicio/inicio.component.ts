import { Component, OnInit } from '@angular/core';
import { ArtistaService } from '../../services/artista.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Artist, ArtistResponse } from '../../interfaces/artist.interface';
import { trackService } from '../../services/tracks.service';
import { Track } from '../../interfaces/track.interface';
import { TrendingService } from '../../services/trending.service';
import { Trending } from '../../interfaces/trending.interface';

@Component({
  selector: 'app-inicio',
  imports: [RouterLink],
  templateUrl: './inicio.component.html',
  styleUrl: './inicio.component.css',
})
export class Inicio implements OnInit {
  constructor(
    private artistaService: ArtistaService,
    private trackService: trackService,
    private trendingService: TrendingService,
    private route: ActivatedRoute
  ) {}

  public listaArtistas: Artist[] = [];
  public listaTracks: Track[] = [];
  public listaTrending: Trending[] = [];
  public listaTrendingSingles: Trending[] = [];

  ngOnInit(): void {
    this.obtenerTop5Artistas();
    this.obtenerTop5Tracks();
    this.getLanzamientos();
    this.getLanzamientosSingles();
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
      this.ordenarTracks();
    });

    this.trackService.getTrackTop2().subscribe((track) => {
      this.listaTracks.push(track.track[0]);
      this.ordenarTracks();
    });

    this.trackService.getTrackTop3().subscribe((track) => {
      this.listaTracks.push(track.track[0]);
      this.ordenarTracks();
    });

    this.trackService.getTrackTop4().subscribe((track) => {
      this.listaTracks.push(track.track[0]);
      this.ordenarTracks();
    });

    this.trackService.getTrackTop5().subscribe((track) => {
      this.listaTracks.push(track.track[0]);
      this.ordenarTracks();
    });
  }

  private ordenarTracks() {
    if (this.listaTracks.length === 5) {
      this.listaTracks.sort(
        (a, b) => Number(b.intMusicVidViews) - Number(a.intMusicVidViews)
      );
    }
  }

  private getLanzamientos() {
    this.trendingService.getTrendings().subscribe((response) => {
      this.listaTrending = response.trending;
    })
  }

  private getLanzamientosSingles() {
    this.trendingService.getTrendingsSingle().subscribe((single) => {
      this.listaTrendingSingles = single.trending;
    })
  }
}
