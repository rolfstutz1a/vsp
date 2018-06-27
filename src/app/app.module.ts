import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchStationComponent } from './search-station/search-station.component';
import { ConnectionsComponent } from './connections/connections.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatAutocompleteModule, MatInputModule } from '@angular/material';
import { SelectedStationComponent } from './selected-station/selected-station.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchStationComponent,
    ConnectionsComponent,
    SelectedStationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
