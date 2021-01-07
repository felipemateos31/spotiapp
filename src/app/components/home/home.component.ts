import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newSongs: any[] = [];
  loading: boolean;

  errorResponse: boolean;
  errorMessage: string;
  errorCode: number;

  constructor(
    private spotifyService: SpotifyService,
  ) {

    this.loading = true;
    this.errorResponse = false;
    this.spotifyService.getNewReleases().subscribe((response: any) => {
      this.loading = false;
      this.newSongs = response;
    }, (error) => {
      this.errorMessage = error.error.error.message;
      this.errorCode = error.error.error.status;
      this.errorResponse = true;
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }
}
