import {Component, OnInit} from '@angular/core';
import {ITunesObject} from "../domain/ITunesObject";
import {ITunesApiService} from "../services/i-tunes-api.service";
import {Router} from "@angular/router";
import {ITunesSearch} from "../domain/ITunesSearch";

@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.scss']
})
export class MusicSearchComponent {

  searchResults$: ITunesObject[] = []

  constructor(private spotifyApiService: ITunesApiService, private readonly router: Router) {
  }

  onSearchChange(event: any): void {
    this.spotifyApiService.getSearchResults(event.target.value).subscribe((search: ITunesSearch) => {
      this.searchResults$ = search.results
    })
  }

  toDetails(id: number) {
    this.router.navigate(['/', 'music', 'details', id]);
  }

}
