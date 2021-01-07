import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  artists: any[] = [];
  loading: boolean;

  constructor(
    private spotifyService: SpotifyService,
  ) { }

  ngOnInit(): void {
  }

  searchArtist(search: string) {
    if (search.length > 0) {
      this.loading = true;
      this.spotifyService.getArtists(search).subscribe((response: any) => {
        this.loading = false;
        this.artists = response;
      }, (error: any) => {
        console.error('getArtistsError', error);
      });
    }
  }
}
