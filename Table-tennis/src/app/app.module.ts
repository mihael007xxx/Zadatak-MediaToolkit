import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ContentButtonsComponent } from './content-buttons/content-buttons/content-buttons.component';
import { PlayersListComponent } from './playersList/players-list/players-list.component';
import { DataManagmentService } from './service/data-managment.service';

@NgModule({
  declarations: [
    AppComponent,
    ContentButtonsComponent,
    PlayersListComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [DataManagmentService],
  bootstrap: [AppComponent]
})
export class AppModule { }
