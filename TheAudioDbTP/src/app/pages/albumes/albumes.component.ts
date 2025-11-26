import { CommonModule } from '@angular/common';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Subject, takeUntil } from 'rxjs';
import { AlbumesService } from '../../services/albumes.service';
import { Album } from '../../interfaces/album.interface';
import { Track } from '../../interfaces/track.interface';
import { AlbumComponent } from '../../components/album-detalle/album-detalle.component';
import { Trending } from '../../interfaces/trending.interface';
import { MostLoved } from '../../interfaces/mostLoved.interfaces';
import { TrendingService } from '../../services/trending.service';
import { MostLovedService } from '../../services/mostLoved.service';

@Component({
  selector: 'app-albumes.component',
  imports: [CommonModule, RouterLink, AlbumComponent],
  templateUrl: './albumes.component.html',
  styleUrl: './albumes.component.css',
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

  public mostLovedAlbums: MostLoved[] = [];
  public isLoadingMostLoved = false;

  private readonly destroy$ = new Subject<void>();

  constructor(
    private readonly albumesService: AlbumesService,
    private readonly trendingService: TrendingService,
    private readonly mostLovedService: MostLovedService,
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
        this.loadTrendingAlbums();
        this.loadMostLovedAlbums();
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

  private loadTrendingAlbums() {
    if (this.trendingAlbums.length > 0) {
      return;
    }

    this.isLoadingTrending = true;

    this.trendingService.getTrendings().subscribe({
      next: (response) => {
        this.trendingAlbums = response?.trending ?? [];
        this.isLoadingTrending = false;
      },
      error: () => {
        this.trendingAlbums = [];
        this.isLoadingTrending = false;
      },
    });
  }

  private loadMostLovedAlbums() {
    if (this.mostLovedAlbums.length > 0) {
      return;
    }

    this.isLoadingMostLoved = true;

    this.mostLovedService.getMostLoved().subscribe({
      next: (response) => {
        this.mostLovedAlbums = response?.mostLoved ?? [];
        this.isLoadingMostLoved = false;
      },
      error: () => {
        this.mostLovedAlbums = [];
        this.isLoadingMostLoved = false;
      },
    });
  }
}
