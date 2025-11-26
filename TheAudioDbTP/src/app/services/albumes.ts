import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AlbumResponse } from '../interfaces/album.interface';
import { TrackResponse } from '../interfaces/track.interface';

@Injectable({
  providedIn: 'root',
})
export class AlbumesService {
  private readonly apiBase = 'https://www.theaudiodb.com/api/v1/json/123';

  constructor(private http: HttpClient) {}

  getAlbumsByArtistId(artistId: string): Observable<AlbumResponse> {
    return this.http.get<AlbumResponse>(`${this.apiBase}/album.php?i=${artistId}`);
  }

  getAlbumById(albumId: string): Observable<AlbumResponse> {
    return this.http.get<AlbumResponse>(`${this.apiBase}/album.php?m=${albumId}`);
  }

  getTracksByAlbumId(albumId: string): Observable<TrackResponse> {
    return this.http.get<TrackResponse>(`${this.apiBase}/track.php?m=${albumId}`);
  }

  buscarAlbumPorNombre(nombreAlbum: string): Observable<AlbumResponse> {
    // La API usa 'searchalbum.php?a=' para buscar por nombre de álbum
    return this.http.get<AlbumResponse>(`${this.apiBase}/searchalbum.php?a=${nombreAlbum}`);
  }
}
