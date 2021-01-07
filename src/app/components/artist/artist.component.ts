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
        this.loading = false;
      }, (error: any) => {

      });

    });
  }

  ngOnInit(): void {
  }

}
