import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artist',
  templateUrl: './artist.component.html',
  styleUrls: ['./artist.component.css']
})
export class ArtistComponent implements OnInit {

  artist: any;
  topTracks: any[] = [];
  loading: boolean;

  constructor(
    private activateRoute: ActivatedRoute,
    private spotifyService: SpotifyService,
  ) {

    this.activateRoute.params.subscribe(params => {
      const artistId = params['id'];
      this.loading = true;
      this.spotifyService.getArtist(artistId).subscribe((response: any) => {
        this.artist = response;
        this.getTopTracks(artistId);
        this.loading = false;
      }, (error: any) => {
        console.error('getArtistError', error);
      });
    });
  }

  ngOnInit(): void {
  }

  getTopTracks(artistId: string) {
    this.spotifyService.getArtistTopTracks(artistId).subscribe((response: any) => {
      this.topTracks = response;
      console.log(response);
    }, (error: any) => {
      console.error('getTopTracksError', error);
    });
  }

}
