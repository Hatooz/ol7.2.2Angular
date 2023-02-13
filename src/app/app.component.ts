import { Component } from '@angular/core';
import { Geolocation } from 'ol';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'testOl';
  geo  = new Geolocation();
}
