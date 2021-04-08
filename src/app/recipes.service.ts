import { Injectable } from '@angular/core';
import axios from 'axios';
import { Recipe } from './recipe';


@Injectable({  providedIn: 'root' })
export class RecipesService {

  constructor(){
  }

  // public listRecipes(callback: (recipes: Recipe[]) => void): void {
  //   axios.get('/api/recipes').then((response) => {
  //     callback(response.data.recipes);
  //   });
  // }

  public async listRecipesAsync(): Promise<Recipe[]> {
    const response = await axios.get('/api/recipes');
    if (response === null) {
      throw new Error('Error');
    }
    return response.data.recipes;
  }

  public async getRecipeAsync(id: number): Promise<Recipe> {
    const response = await axios.get('/api/recipes/' + id);
    if (response === null) {
      throw new Error('Error');
    }
    return response.data.recipe;
  }

  public async addRecipeAsync(recipe: any): Promise<void> {
    const response = await axios.post('/api/recipes', recipe);
    if (response === null) {
      throw new Error('Error');
    }
    console.log('Recipe added');
  }

  public async editRecipeAsync(id: number, recipe: any): Promise<void> {
    const response = await axios.patch('/api/recipes/' + id, recipe);
    if (response === null) {
      throw new Error('Error');
    }
    console.log('Recipe edited');
  }

  public async deleteRecipeAsync(id: number): Promise<void> {
    const response = await axios.delete('/api/recipes/' + id);
    if (response === null) {
      throw new Error('Error');
    }
    console.log('Recipe deleted');
  }

}
