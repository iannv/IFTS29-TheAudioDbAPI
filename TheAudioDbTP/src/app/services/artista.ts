import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Artist, ArtistResponse } from '../interfaces/artist.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArtistaService {
  private apiUrl = 'https://www.theaudiodb.com/api/v1/json/123/search.php';
  private apiUrlById = 'https://www.theaudiodb.com/api/v1/json/123/artist.php';

  private apiUrlArtista1 = 'https://www.theaudiodb.com/api/v1/json/123/search.php?s=pink_floyd';
  private apiUrlArtista2 = 'https://www.theaudiodb.com/api/v1/json/123/search.php?s=coldplay';
  private apiUrlArtista3 = 'https://www.theaudiodb.com/api/v1/json/123/search.php?s=u2';
  private apiUrlArtista4 = 'https://www.theaudiodb.com/api/v1/json/123/search.php?s=queen';
  private apiUrlArtista5 = 'https://www.theaudiodb.com/api/v1/json/123/search.php?s=metallica';

  constructor(private http: HttpClient) {}

  buscarArtista(nombreArtista: string): Observable<ArtistResponse> {
    return this.http.get<ArtistResponse>(`${this.apiUrl}?s=${nombreArtista}`);
  }

  buscarArtistaPorId(idArtista: number): Observable<ArtistResponse> {
    return this.http.get<ArtistResponse>(`${this.apiUrlById}?i=${idArtista}`);
  }

  // Top 5 artistas
  getArtistaTop1(): Observable<ArtistResponse> {
    return this.http.get<ArtistResponse>(this.apiUrlArtista1);
  }

  getArtistaTop2(): Observable<ArtistResponse> {
    return this.http.get<ArtistResponse>(this.apiUrlArtista2);
  }

  getArtistaTop3(): Observable<ArtistResponse> {
    return this.http.get<ArtistResponse>(this.apiUrlArtista3);
  }

  getArtistaTop4(): Observable<ArtistResponse> {
    return this.http.get<ArtistResponse>(this.apiUrlArtista4);
  }

  getArtistaTop5(): Observable<ArtistResponse> {
    return this.http.get<ArtistResponse>(this.apiUrlArtista5);
  }
}
