import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {RecipesService} from '../recipes.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-recipe-add-form',
  templateUrl: './recipe-add-form.component.html',
  styleUrls: ['./recipe-add-form.component.scss']
})
export class RecipeAddFormComponent implements OnInit {
  addForm = this.formBuilder.group({
    title: '',
    type: '',
    time: 0,
    ingredients: '',
    steps: ''
  });

  constructor(
    private recipesService: RecipesService,
    private formBuilder: FormBuilder,
    private router: Router
  ) {
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.recipesService.addRecipeAsync(this.addForm.value);
    this.addForm.reset();
    this.router.navigate(['/']);
  }

}
