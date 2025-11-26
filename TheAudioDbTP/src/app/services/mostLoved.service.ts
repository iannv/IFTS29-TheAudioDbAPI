import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { MostLovedResponse } from '../interfaces/mostLoved.interfaces';

@Injectable({
  providedIn: 'root',
})
export class MostLovedService {

  private apiUrlLoved = 'https://www.theaudiodb.com/api/v1/json/123/mostloved.php?format=album';

  constructor(private http: HttpClient) {}

  getMostLoved(): Observable<MostLovedResponse> {
    return this.http.get<MostLovedResponse>(this.apiUrlLoved);
  }
}
