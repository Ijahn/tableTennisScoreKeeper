import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlayerFormComponent } from './player-form/player-form.component';
import { ScoreCardComponent } from './score-card/score-card.component';


const routes: Routes = [
  { path: 'form', component: PlayerFormComponent },
  { path: 'score-card', component: ScoreCardComponent },
  { path: 'playerForm', component: PlayerFormComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
