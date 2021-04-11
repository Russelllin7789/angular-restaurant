import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeService } from './recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
  recipeSelected: Recipe

  // 令 recipe / recipe-list / recipe-item 共用一個 recipe service 實例
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
    // 在生命週期初期訂閱 service 裡面資料的變動
    this.recipeService.recipeSelected.subscribe(
      (recipe: Recipe) => {
        this.recipeSelected = recipe
      }
    )
  }

}
