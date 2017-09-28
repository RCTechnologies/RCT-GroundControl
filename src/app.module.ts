import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { AgmCoreModule } from './../node_modules/angular2-google-maps/core';
import { GoogleMapsComponent } from './gmaps/google-maps.component';

@NgModule({
  imports: [BrowserModule,
    AgmCoreModule.forRoot({
      apiKey: '[insert key]'
    })],
  declarations: [
    AppComponent,
    GoogleMapsComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
