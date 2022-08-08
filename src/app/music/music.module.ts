import {NgModule} from "@angular/core";
import {MusicRoutingModule} from "./music-routing.module";
import { MusicSearchComponent } from './music-search/music-search.component';
import {CommonModule} from "@angular/common";

@NgModule({
  declarations: [
    MusicSearchComponent
  ],
  exports: [],
  imports: [MusicRoutingModule, CommonModule]
})
export class MusicModule {

}
