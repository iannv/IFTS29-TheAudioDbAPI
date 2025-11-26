import { Component, OnInit } from '@angular/core';
import { Artist } from '../../interfaces/artist.interface';
import { ArtistaService } from '../../services/artista.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';
import { YoutubePlayerComponent } from '../youtube-player/youtube-player.component';
import { TopTracksComponent } from '../top-tracks/top-tracks.component';
@Component({
  selector: 'app-detalle-detalle',
  imports: [YoutubePlayerComponent, CommonModule,TopTracksComponent],
  templateUrl: './artista-detalle.component.html',
  styleUrl: './artista-detalle.component.css',
  standalone: true
})
export class ArtistaDetalle implements OnInit {
  artista!: Artist;
  video: string = '';
  playerVars = {
    origin: 'http://localhost:4200'
  };

  constructor(private service: ArtistaService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.video = ''; // Reset video on navigation
        this.service.buscarArtistaPorId(parseInt(id)).subscribe((artista) => {
          this.artista = artista.artists[0];
        });
        this.service.getVideoArtista(id).subscribe((artista) => {
          if (artista.mvids && artista.mvids.length > 0) {
            this.video = this.getYouTubeVideoId(artista.mvids[0].strMusicVid);
          }
        })
      }
    });
  }

  getYouTubeVideoId(url: string): string {
    if (!url) {
      return '';
    }
    try {
      const urlParams = new URLSearchParams(new URL(url).search);
      return urlParams.get('v') || '';
    } catch (e) {
      console.error('Invalid URL for video', e);
      return '';
    }
  }
}
