import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeDisplayComponent} from './recipe-display/recipe-display.component';
import {RecipeAddFormComponent} from './recipe-add-form/recipe-add-form.component';
import {RecipeEditFormComponent} from './recipe-edit-form/recipe-edit-form.component';

const routes: Routes = [
  {path: '', component: RecipeListComponent},
  {path: 'display/:id', component: RecipeDisplayComponent},
  {path: 'add', component: RecipeAddFormComponent},
  {path: 'edit/:id', component: RecipeEditFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
