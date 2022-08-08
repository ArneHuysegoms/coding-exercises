import {Component, OnInit} from '@angular/core';
import {map, Observable, Subject, switchMap} from "rxjs";
import {ActivatedRoute, Router} from "@angular/router";
import {ITunesApiService} from "../services/i-tunes-api.service";
import {ITunesObject} from "../domain/ITunesObject";

@Component({
  selector: 'app-music-details',
  templateUrl: './music-details.component.html',
  styleUrls: ['./music-details.component.scss']
})
export class MusicDetailsComponent implements OnInit {

  musicId$: Observable<number>;
  isNotFound = false;
  music: ITunesObject | undefined = undefined;

  constructor(private readonly route: ActivatedRoute, private readonly router: Router, private spotifyApiService: ITunesApiService) {
    this.musicId$ =
      this.route.paramMap.pipe(map(params => params.get('id')), map(stringId => Number(stringId)));
    this.musicId$.pipe(switchMap(id => this.spotifyApiService.getSearchResults(String(id))))
      .subscribe({
        next: music => this.music = music.results[0], error: () => this.isNotFound = true
      });
  }

  ngOnInit(): void {
  }

  back() {
    this.router.navigate(['/', 'music']);
  }
}
