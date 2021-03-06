import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe.service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe
  // 在引入 service 之前的資料流操作
  // @Output() selectedRecipe = new EventEmitter<void>()

  @Input() index: number

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onSelectedRecipe() {
    // 在引入 service 之前的資料流操作
    // this.selectedRecipe.emit()

    this.recipeService.recipeSelected.emit(this.recipe)
  }
}
