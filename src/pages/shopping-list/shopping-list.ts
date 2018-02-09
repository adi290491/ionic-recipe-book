import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ShoppingListService } from '../../app/services/shopping-list.service';
import { Ingredient } from '../../app/models/ingredient';
import { PopoverController } from 'ionic-angular';
import { SLOptionsPage } from './sl-options/sl-options';
import { AuthService } from '../../app/services/auth.service';

@Component({
  selector: 'page-shopping-list',
  templateUrl: 'shopping-list.html',
})
export class ShoppingListPage {

  listItems: Ingredient[];

  constructor(private shoppingListService: ShoppingListService,
    private popOverCtrl: PopoverController,
    private authService: AuthService){}

  onAddItem(form: NgForm){
    console.log(form.value.ingredientName);
    console.log(form.value.amount);
    this.shoppingListService.addIngredient(form.value.ingredientName, form.value.amount);
    form.reset();
    this.loadItems();
  }

  ionViewWillEnter(){
    this.loadItems();
  }

  private loadItems(){
    this.listItems = this.shoppingListService.getItems();
  }

  onCheckItem(index: number){
    this.shoppingListService.removeItem(index);
    this.loadItems();
  }

  onShowOptions(event: MouseEvent){
    const popover = this.popOverCtrl.create(SLOptionsPage);
    popover.present({
      ev: event
    });
    popover.onDidDismiss(
      data => {
        if(data.action == 'load'){

        } else {
          this.authService.getActiveUser().getToken()
            .then(
              (token: string) => {
                
              }
            )
            .catch();
        }
      }
    )
  }
}
