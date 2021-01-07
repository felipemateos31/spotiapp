import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { PathConstants } from '../core/helpers/path.constants';
import { map } from 'rxjs/operators';
import { ConfigConstants } from '../core/helpers/config.constants';

@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor(
    private httpClient: HttpClient,
  ) { }


  getNewReleases() {
    const headers = new HttpHeaders();

    const url = PathConstants.getPath(PathConstants.NEW_RELEASES);
    return this.httpClient.get(url, { headers }).pipe(map(response => response['albums'].items));
  }

  getArtists(artist: string) {
    const headers = new HttpHeaders();

    const url = PathConstants.getPath(PathConstants.ARTISTS).replace('{search}', artist);
    return this.httpClient.get(url, { headers }).pipe(map(response => response['artists'].items));
  }

  getArtist(id: string) {
    const headers = new HttpHeaders();

    const url = PathConstants.getPath(PathConstants.ARTIST).replace('{id}', id);
    return this.httpClient.get(url, { headers });
  }

  getArtistTopTracks(id: string) {
    const headers = new HttpHeaders();

    const url = PathConstants.getPath(PathConstants.ARTIST_TOP_TRACKS).replace('{id}', id);
    return this.httpClient.get(url, { headers }).pipe(map(reponse => reponse['tracks']));
  }

  //Get New Token API (Net Core)
  getNewToken() {
    const headers = new HttpHeaders({
      ...ConfigConstants.HEADERS_NO_AUTH
    });

    const url = PathConstants.getPathLocal();
    return this.httpClient.get(url, { headers });
  }

  //Get Token 
  getToken(){
    return localStorage.getItem('token');
  }
}
