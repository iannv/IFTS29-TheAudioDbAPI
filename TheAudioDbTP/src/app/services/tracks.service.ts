import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Track, TrackResponse } from '../interfaces/track.interface';

@Injectable({
  providedIn: 'root',
})
export class trackService {

  private apiUrl = 'https://www.theaudiodb.com/api/v1/json/123/track.php?m=2115888';

  // Top tracks
  private apiUrlTop1 = 'https://www.theaudiodb.com/api/v1/json/123/searchtrack.php?s=coldplay&t=fix_you';
  private apiUrlTop2 = 'https://www.theaudiodb.com/api/v1/json/123/searchtrack.php?s=nirvana&t=smells_like_teen_spirit';
  private apiUrlTop3 = 'https://www.theaudiodb.com/api/v1/json/123/searchtrack.php?s=adele&t=rolling_in_the_deep';
  private apiUrlTop4 = 'https://www.theaudiodb.com/api/v1/json/123/searchtrack.php?s=maroon_5&t=sugar';
  private apiUrlTop5 = 'https://www.theaudiodb.com/api/v1/json/123/searchtrack.php?s=oasis&t=wonderwall';

  constructor(private http: HttpClient) {}


  // Top tracks
  getTrackTop1(): Observable<TrackResponse> {
    return this.http.get<TrackResponse>(this.apiUrlTop1);
  }

    getTrackTop2(): Observable<TrackResponse> {
    return this.http.get<TrackResponse>(this.apiUrlTop2);
  }

    getTrackTop3(): Observable<TrackResponse> {
    return this.http.get<TrackResponse>(this.apiUrlTop3);
  }

    getTrackTop4(): Observable<TrackResponse> {
    return this.http.get<TrackResponse>(this.apiUrlTop4);
  }

    getTrackTop5(): Observable<TrackResponse> {
    return this.http.get<TrackResponse>(this.apiUrlTop5);
  }

}
