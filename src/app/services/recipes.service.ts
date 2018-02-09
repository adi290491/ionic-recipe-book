import { Recipe } from "../models/recipe";
import { Ingredient } from "../models/ingredient";

export class RecipesService {
    private recipes: Recipe[] = [];

    addRecipe(title: string, description: string, difficulty: string, ingredients: Ingredient[]){
        this.recipes.push(new Recipe(title, description, difficulty, ingredients));
        
    }

    getRecipes(){
        return this.recipes.slice();
    }

    getRecipe(){

    }

    updateRecipe(index: number,
         title:string,
          description: string,
           difficulty: string, 
           ingredients: Ingredient[]){
        this.recipes[index] = new Recipe(title, description, difficulty, ingredients);
        console.log(this.recipes);
    }

    removeRecipe(index: number){
        this.recipes.splice(index, 1);
    }
}