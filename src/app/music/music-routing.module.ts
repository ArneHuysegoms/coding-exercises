import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {MusicComponent} from "./music.component";
import {MusicDetailsComponent} from "./music-details/music-details.component";
import {MusicSearchComponent} from "./music-search/music-search.component";

const routes: Routes = [
  {
    path: '', component: MusicComponent, children: [
      {path: 'details/:id',
        component: MusicDetailsComponent,
      } ,
      {path: 'overview', component: MusicSearchComponent},
      {path: '**', redirectTo: "overview"},
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)], exports: [RouterModule]
})
export class MusicRoutingModule {
}
