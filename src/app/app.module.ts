import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {ColorService} from "./paint/services/color.service";
import {PaintComponent} from './paint/paint.component';
import {MusicComponent} from './music/music.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterModule, Routes} from '@angular/router';
import { MusicDetailsComponent } from './music/music-details/music-details.component';

const routes: Routes = [
  { path: 'paint', component: PaintComponent },
  { path: 'music', loadChildren: () => import("./music/music.module").then(m => m.MusicModule), },
  { path: '**', redirectTo: '/music' }
];

@NgModule({
  declarations: [
    AppComponent,
    PaintComponent,
    MusicComponent,
    MusicDetailsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule
  ],
  providers: [ColorService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
