import { Component, OnInit } from '@angular/core';

import { Sections } from './sections';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private activeSection: Sections;
  public mySections:object = Sections; // in order to use the enum inside the template

  constructor() {
    this.activeSection = Sections.recipes;
  }

  ngOnInit() {
  }

  navGoToRecipes() {
    this.activeSection = Sections.recipes;
  }

  navGoToShoppingList() {
    this.activeSection = Sections.shopping;
  }

}
