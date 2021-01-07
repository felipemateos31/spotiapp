import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PathConstants } from '../core/helpers/path.constants';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  token: string = 'BQB09-qjqbNZ-HzpJP3ZWZi3vsXHXFrHer8O1dp1XJYqIp2_NbJ0aK5DCPcixulbsc35Ji343Sh3xtZWrS0'
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

  getArtist(artist: string) {
    const headers = new HttpHeaders({
      'Authorization': `Bearer ${this.token}`
    });

    const url = PathConstants.getPath(PathConstants.ARTIST).replace('{search}', artist);
    return this.httpClient.get(url, { headers }).pipe(map(response => response['artists'].items));
  }

}
