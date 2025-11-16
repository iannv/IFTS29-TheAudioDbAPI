import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ArtistResponse } from '../interfaces/artist.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ArtistaService {
  private apiUrl = 'https://www.theaudiodb.com/api/v1/json/123/search.php';
  private apiUrlById = 'https://www.theaudiodb.com/api/v1/json/123/artist.php';

  constructor(private http: HttpClient) {}

  buscarArtista(nombreArtista: string): Observable<ArtistResponse> {
    return this.http.get<ArtistResponse>(`${this.apiUrl}?s=${nombreArtista}`);
  }

  buscarArtistaPorId(idArtista: number): Observable<ArtistResponse> {
    return this.http.get<ArtistResponse>(`${this.apiUrlById}?i=${idArtista}`);
  }
}
