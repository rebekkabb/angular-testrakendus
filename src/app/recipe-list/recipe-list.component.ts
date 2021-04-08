import {Component, OnInit} from '@angular/core';
import {RecipesService} from '../recipes.service';
import {Recipe} from '../recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [];

  constructor(private recipesService: RecipesService) {
  }

  ngOnInit(): void {
    // this.listRecipes();

    this.fillRecipes();
  }

  // listRecipes(): void {
  //   this.recipesService.listRecipes((recipes: Recipe[]) => {
  //     this.recipes = recipes;
  //   });
  // }

  async fillRecipes(): Promise<void> {
    this.recipes = await this.recipesService.listRecipesAsync();
  }
}
