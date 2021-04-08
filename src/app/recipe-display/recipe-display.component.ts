import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {RecipesService} from '../recipes.service';

@Component({
  selector: 'app-recipe-display',
  templateUrl: './recipe-display.component.html',
  styleUrls: ['./recipe-display.component.scss']
})
export class RecipeDisplayComponent implements OnInit {
  @Input() recipe: any;

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService,
  ) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const recipeId = Number(routeParams.get('id'));
    this.fillRecipe(recipeId);
  }

  async fillRecipe(recipeId: number): Promise<void> {
    this.recipe =  await this.recipesService.getRecipeAsync(recipeId);
  }

}
