import { RecipePage } from './../recipe/recipe';
import { RecipesService } from './../../app/services/recipes.service';
import { EditRecipePage } from './../edit-recipe/edit-recipe';
import { NavController } from 'ionic-angular';
import { Component } from '@angular/core';
import { Recipe } from '../../app/models/recipe';

@Component({
  selector: 'page-recipes',
  templateUrl: 'recipes.html',
})
export class RecipesPage{
  recipes: Recipe[];

  constructor(private navCtrl: NavController,
    private recipesService: RecipesService){}

  onNewRecipe(){
    this.navCtrl.push(EditRecipePage, {mode: 'New'});
  }

  ionViewWillEnter(){
    this.recipes = this.recipesService.getRecipes();
    console.log(this.recipes);
  }

  onLoadRecipe(recipe: Recipe, index: number){
    this.navCtrl.push(RecipePage, {recipe: recipe, index: index});
  }
}
