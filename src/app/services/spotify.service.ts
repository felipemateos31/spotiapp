import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PathConstants } from '../core/helpers/path.constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token: string = 'BQDR0p27JQtVvlYW2RyYW-9t9Bx_Rwa6YBLic6VJrJ4F-fHQKsZvJaoFmMfK9pLlJF6DeR0o5GAwl9ucpSc'
  constructor(
    private httpClient: HttpClient,
  ) { }


  getNewReleases() {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });
    const url = PathConstants.getPath(PathConstants.NEW_RELEASES);
    return this.httpClient.get(url, { headers }).pipe(map(response => response['albums'].items));
  }

  getArtists(artist: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    const url = PathConstants.getPath(PathConstants.ARTISTS).replace('{search}', artist);
    return this.httpClient.get(url, { headers }).pipe(map(response => response['artists'].items));
  }

  getArtist(id: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    const url = PathConstants.getPath(PathConstants.ARTIST).replace('{id}', id);
    return this.httpClient.get(url, { headers });
  }

}
