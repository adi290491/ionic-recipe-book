import { EditRecipePage } from './../edit-recipe/edit-recipe';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Recipe } from '../../app/models/recipe';
import { Ingredient } from '../../app/models/ingredient';
import { ShoppingListService } from '../../app/services/shopping-list.service';
import { RecipesService } from '../../app/services/recipes.service';

@Component({
  selector: 'page-recipe',
  templateUrl: 'recipe.html',
})
export class RecipePage implements OnInit{
  recipe: Recipe;
  index: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     private slService: ShoppingListService, private recipesService: RecipesService) {
  }

  ngOnInit(){
    this.recipe = this.navParams.get('recipe');
    this.index = this.navParams.get('index');
  }

  onEditRecipe(){
    this.navCtrl.push(EditRecipePage, {mode: 'Edit', recipe: this.recipe, index: this.index})
  }

  onAddIngredients(){
    const ingredients : Ingredient[] = this.recipe.ingredients;
    this.slService.addItems(this.recipe.ingredients)
  }

  onDeleteRecipe(){
    this.recipesService.removeRecipe(this.index);
    this.navCtrl.popToRoot();
  }
}
