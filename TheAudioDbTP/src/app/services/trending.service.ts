import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TrendingResponse } from '../interfaces/trending.interface';

@Injectable({
  providedIn: 'root',
})
export class TrendingService {

  private apiUrlAlbum = 'https://www.theaudiodb.com/api/v1/json/123/trending.php?country=us&type=itunes&format=albums';
  private apiUrlSingle = 'https://www.theaudiodb.com/api/v1/json/123/trending.php?country=us&type=itunes&format=singles';

  constructor(private http: HttpClient) {}

  getTrendings(): Observable<TrendingResponse> {
    return this.http.get<TrendingResponse>(this.apiUrlAlbum);
  }

  getTrendingsSingle(): Observable<TrendingResponse>{
    return this.http.get<TrendingResponse>(this.apiUrlSingle);
  }
}
