import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'App',
  template:
  `<div>
    <app-google-maps></app-google-maps>
  </div>`
})
export class AppComponent implements OnInit {
  public readonly name = 'electron-forge';

  ngOnInit(): void {
    console.log('component initialized');
  }
}