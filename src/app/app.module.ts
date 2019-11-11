import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { PlayerFormComponent } from './player-form/player-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material';
import { ScoreCardComponent } from './score-card/score-card.component';
import {MatSelectModule} from '@angular/material/select';
import { SinglesEventComponent } from './singles-event/singles-event.component';
import { DoublesEventComponent } from './doubles-event/doubles-event.component';
import { TeamEventComponent } from './team-event/team-event.component';
import { PlayerNamesComponent } from './player-names/player-names.component';

@NgModule({
  declarations: [
    AppComponent,
    PlayerFormComponent,
    ScoreCardComponent,
    SinglesEventComponent,
    DoublesEventComponent,
    TeamEventComponent,
    PlayerNamesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
