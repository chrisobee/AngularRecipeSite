import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe(
      'Big Kahuna Burger',
      'That IS a tasty burger!',
      'https://upload.wikimedia.org/wikipedia/commons/e/eb/Pineapple_bacon_cheeseburger.jpg'
    ),
    new Recipe(
      'Strawberry Rhubarb Pie',
      'Best Pie You\'ll ever taste!',
      'https://upload.wikimedia.org/wikipedia/commons/1/1e/Strawberry-rhubarb_pie_with_pastry_lattice%2C_May_2008.jpg'
    )
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
