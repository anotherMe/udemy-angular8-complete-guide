import { Component } from '@angular/core';

import { Sections } from './header/sections';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'course-project-the-basics';
  public mySections:object = Sections; // in order to use the enum inside the template
}
