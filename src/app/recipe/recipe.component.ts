import {Component, Input, OnInit} from '@angular/core';
import {RecipesService} from '../recipes.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.scss']
})
export class RecipeComponent implements OnInit {
  @Input() recipe: any;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService,
  ) {
  }

  ngOnInit(): void {
  }

  async deleteRecipe(recipeId: number): Promise<void> {
    this.recipe =  await this.recipesService.deleteRecipeAsync(recipeId);
    await this.recipesService.listRecipesAsync();
  }

}
