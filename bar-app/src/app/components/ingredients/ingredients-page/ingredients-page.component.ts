import { Component, OnInit } from '@angular/core';
import {IngredientsService} from "../../shared/ingredients/ingredients.service";
import {
  IIngredientItem,
  IngredientType,
  IngredientUnit
} from "../../shared/ingredients/ingredient-item.model";

@Component({
  selector: 'app-ingredients-page',
  templateUrl: './ingredients-page.component.html',
  styleUrls: ['./ingredients-page.component.scss']
})
export class IngredientsPageComponent implements OnInit {
  search: '';
  ingredientsList: IIngredientItem[] = [];
  isAddNewIngredients = false;
  ingredientsTypes: Array<{id: number, name: IngredientType}> = [];
  ingredientsUnits: Array<{id: number, name: IngredientUnit}> = [];

  constructor(private ingredientsService: IngredientsService ) { }

  ngOnInit(): void {
    this.fetchIngredients();
  //this.ingredientsList = this.ingredientsService.getIngredients();
    this.ingredientsTypes = this.ingredientsService.getIngredientsTypes();
    console.log(this.ingredientsTypes)
    this.ingredientsUnits = this.ingredientsService.getIngredientsUnits();
  }

  deleteCardHandler(id: number) {
    this.ingredientsService.deleteIngredients(id)
      .subscribe(()=> {
        this.ingredientsList = this.ingredientsList.filter(item => item.id !== id);
      })
  }

  addCardHandler(item: IIngredientItem){
    const newIngredient = {
      name: item.name,
      type: this.ingredientsTypes[+item.type].name,
      unit: this.ingredientsUnits[+item.type].name,
    }
    this.ingredientsService.addIngredient(newIngredient).subscribe(ingredient => {
      this.ingredientsList = [...this.ingredientsList, ingredient];
    })
  }
  fetchIngredients(){
    this.ingredientsService.getIngredients()
      .subscribe(ingredients =>{
        this.ingredientsList = ingredients
      })
  }

  test(item: any){
    this.search = item;
  }
}

