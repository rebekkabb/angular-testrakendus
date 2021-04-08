import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {RecipesService} from '../recipes.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-recipe-edit-form',
  templateUrl: './recipe-edit-form.component.html',
  styleUrls: ['./recipe-edit-form.component.scss']
})
export class RecipeEditFormComponent implements OnInit {
  editForm = this.formBuilder.group({
    title: 'y',
    type: '',
    time: 0,
    ingredients: '',
    steps: ''
  });
  recipe: any = '';

  constructor(
    private route: ActivatedRoute,
    private recipesService: RecipesService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;
    const recipeId = Number(routeParams.get('id'));
    this.fillRecipe(recipeId);
  }

  async fillRecipe(recipeId: number): Promise<void> {
    this.recipe = await this.recipesService.getRecipeAsync(recipeId);
    this.editForm = this.formBuilder.group({
      title: this.recipe.title,
      type: this.recipe.type,
      time: this.recipe.time,
      ingredients: this.recipe.ingredients,
      steps: this.recipe.steps
    });
  }

  onSubmit(): void {
    this.recipesService.editRecipeAsync(this.recipe.id, this.editForm.value);
    this.editForm.reset();
    this.router.navigate(['/']);
  }

}
