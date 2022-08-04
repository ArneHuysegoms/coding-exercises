import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PaintComponent} from "./paint/paint.component";
import {MusicComponent} from "./music/music.component";

const routes: Routes = [
  { path: 'paint', component: PaintComponent },
  { path: '**', component: MusicComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
