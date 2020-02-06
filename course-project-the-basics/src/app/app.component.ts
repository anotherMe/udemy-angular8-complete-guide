
import { Component } from '@angular/core';
import { Sections } from './header/sections';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ShoppingListService]
})
export class AppComponent {
  title = 'course-project-the-basics';
  public mySections:object = Sections; // in order to use the enum inside the template
}
