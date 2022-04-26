import { Component, OnInit } from '@angular/core';
import {IngredientsService} from "../../shared/ingredients/ingredients.service";
import {
  IIngredientItem,
  IngredientForSave,
  IngredientType,
  IngredientUnit
} from "../../shared/ingredients/ingredient-item.model";

@Component({
  selector: 'app-ingredients-page',
  templateUrl: './ingredients-page.component.html',
  styleUrls: ['./ingredients-page.component.scss']
})
export class IngredientsPageComponent implements OnInit {
  ingredientsList: IIngredientItem[];
  isAddNewIngredients = false;
  ingredientsTypes: Array<{id: number, name: IngredientType}> = [];
  ingredientsUnits: Array<{id: number, name: IngredientUnit}> = [];

  constructor(private ingredientsService: IngredientsService ) { }

  ngOnInit(): void {
    this.ingredientsList = this.ingredientsService.getIngredients();
    this.ingredientsTypes = this.ingredientsService.getIngredientsTypes();
    this.ingredientsUnits = this.ingredientsService.getIngredientsUnits();
  }

  deleteCardHandler(id: number) {
    this.ingredientsList = this.ingredientsList.filter(item => item.id !== id);
  }
  addCardHandler(item: IngredientForSave){
    this.ingredientsList = this.ingredientsService.addIngredient(item)
  }
}

