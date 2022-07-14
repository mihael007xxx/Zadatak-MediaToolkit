import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentButtonsComponent } from './content-buttons/content-buttons/content-buttons.component';
import { PlayersListComponent } from './playersList/players-list/players-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ContentButtonsComponent,
    PlayersListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
