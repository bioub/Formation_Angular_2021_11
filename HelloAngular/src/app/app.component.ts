import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // document.querySelector
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedName = 'Eric';
  names = ['Romain', 'Eric', 'Thomas', 'Mathilde'];

  showClock = true;
}
