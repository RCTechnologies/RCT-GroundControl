import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AgmCoreModule } from 'angular2-google-maps/core';
import { GoogleMapsComponent } from './gmaps/google-maps.component';

@NgModule({
  imports: [BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: '[Insert your api key here]'
    })],
  declarations: [
    AppComponent,
    GoogleMapsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }