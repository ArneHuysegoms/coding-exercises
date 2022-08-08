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
  loading : boolean = false
  emptySearch : boolean = true

  constructor(private spotifyApiService: ITunesApiService, private readonly router: Router) {
  }

  onSearchChange(event: any): void {
    this.loading = true
    if (event.target.value === '') {
      this.emptySearch = true
    } else {
      this.emptySearch = false
    }
    this.spotifyApiService.getSearchResults(event.target.value).subscribe(
      {
        next: (search: ITunesSearch) => {
          this.searchResults$ = search.results
        },
        complete: () => this.loading = false
      })
  }

  toDetails(id: number) {
    this.router.navigate(['/', 'music', 'details', id]);
  }

}
