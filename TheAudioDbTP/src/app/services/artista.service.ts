import { Injectable } from '@angular/core';
import { catchError, forkJoin, map, Observable, of, switchMap } from 'rxjs';
import { Artist, ArtistaMusicBrainz, ArtistaMusicBrainzResponse, ArtistResponse } from '../interfaces/artist.interface';
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
    const encodenombreArtista = encodeURIComponent(nombreArtista)
    return this.http.get<ArtistResponse>(`${this.apiUrl}?s=${encodenombreArtista}`);
  }

  buscarArtistaPorId(idArtista: number): Observable<ArtistResponse> {
    return this.http.get<ArtistResponse>(`${this.apiUrlById}?i=${idArtista}`);
  }

  getArtistaPorGenero(genero: string, page: number = 1,): Observable<ArtistaMusicBrainz[]> {
    const offset =page === 1 ? 1 :  (page - 1) * 12 + 1;

    const baseUrl = 'https://musicbrainz.org/ws/2';
    const url = `${baseUrl}/artist?query=tag:${genero}&limit=12&offset=${offset}&fmt=json`;

    return this.http.get<ArtistaMusicBrainzResponse>(url).pipe(
      switchMap((data) => {
        const artistas = (data.artists || []).filter(
          (artista) => !artista.name.startsWith('[')
        );

        const artistasConImagen$ = artistas.map((artista: any) =>
          this.http
            .get<any>(
              `https://www.theaudiodb.com/api/v1/json/123/search.php?s=${encodeURIComponent(
                artista.name
              )}`
            )
            .pipe(
              map((imgResult) => {
                const img =
                  imgResult?.artists?.[0]?.strArtistThumb ||
                  imgResult?.artists?.[0]?.strArtistLogo ||
                  null;

                return {
                  ...artista,
                  image: img, 
                };
              }),
              catchError(() =>
                of({
                  ...artista,
                  image: null, 
                })
              )
            )
        );

        return forkJoin(artistasConImagen$);
      })
    );
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
