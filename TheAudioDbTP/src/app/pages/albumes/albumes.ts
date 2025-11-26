import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AlbumesService } from '../../services/albumes';
import { Album } from '../../interfaces/album.interface';
import { Track } from '../../interfaces/track.interface';
import { AlbumComponent } from '../../components/album-component/album-component';
import { Trending } from '../../interfaces/trending.interface';
import { TrendingService } from '../../services/trending';

@Component({
  selector: 'app-albumes',
  imports: [CommonModule, RouterLink, AlbumComponent],
  templateUrl: './albumes.html',
  styleUrl: './albumes.css',
})
export class Albumes implements OnInit, OnDestroy {
  public album?: Album;
  public tracks: Track[] = [];
  public isLoadingAlbum = false;
  public isLoadingTracks = false;
  public hasRouteParams = false;
  public albumErrorMessage = '';

  // listado inicial de álbumes (vista "explorar")
  public trendingAlbums: Trending[] = [];
  public isLoadingTrending = false;

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly albumesService: AlbumesService,
    private readonly trendingService: TrendingService,
    private readonly route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.pipe(takeUntil(this.destroy$)).subscribe((params) => {
      const artistId = params.get('artistId');
      const albumId = params.get('albumId');

      if (!artistId || !albumId) {
        this.hasRouteParams = false;
        this.album = undefined;
        this.tracks = [];
        this.albumErrorMessage = '';
        this.loadTrendingAlbumsRandom();
        return;
      }

      this.hasRouteParams = true;
      this.loadAlbumDetail(albumId);
      this.loadTracks(albumId);
    });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  private loadAlbumDetail(albumId: string) {
    this.isLoadingAlbum = true;
    this.albumErrorMessage = '';

    this.albumesService.getAlbumById(albumId).subscribe({
      next: (response) => {
        this.album = response?.album?.[0];
        this.isLoadingAlbum = false;

        if (!this.album) {
          this.albumErrorMessage =
            'No se encontró información del álbum solicitado.';
        }
      },
      error: () => {
        this.album = undefined;
        this.isLoadingAlbum = false;
        this.albumErrorMessage =
          'Ocurrió un error al cargar los datos del álbum.';
      },
    });
  }

  private loadTracks(albumId: string) {
    this.isLoadingTracks = true;

    this.albumesService.getTracksByAlbumId(albumId).subscribe({
      next: (response) => {
        const tracks = response?.track ?? [];
        this.tracks = [...tracks].sort(
          (a, b) =>
            Number(a.intTrackNumber ?? 0) - Number(b.intTrackNumber ?? 0)
        );
        this.isLoadingTracks = false;
      },
      error: () => {
        this.tracks = [];
        this.isLoadingTracks = false;
      },
    });
  }

  private loadTrendingAlbumsRandom() {
    // evitar recargar si ya tenemos datos
    if (this.trendingAlbums.length > 0) {
      return;
    }

    this.isLoadingTrending = true;

    this.trendingService.getTrendings().subscribe({
      next: (response) => {
        const base = response?.trending ?? [];
        // mezcla simple y selección de un subconjunto
        const shuffled = [...base].sort(() => Math.random() - 0.5);
        this.trendingAlbums = shuffled.slice(0, 12);
        this.isLoadingTrending = false;
      },
      error: () => {
        this.trendingAlbums = [];
        this.isLoadingTrending = false;
      },
    });
  }
}
