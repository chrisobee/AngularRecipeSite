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
    )
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
