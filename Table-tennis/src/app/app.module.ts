import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentButtonsComponent } from './content-buttons/content-buttons/content-buttons.component';
import { PlayersListComponent } from './playersList/players-list/players-list.component';
import { DataManagmentService } from './service/data-managment.service';
import { MatchesComponent } from './matches/matches/matches.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentButtonsComponent,
    PlayersListComponent,
    MatchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [DataManagmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
