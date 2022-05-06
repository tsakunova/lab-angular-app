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
  loading = false;
  search: '';
  ingredientsList: IIngredientItem[] = [];
  isAddNewIngredients = false;
  ingredientsTypes: Array<{id: number, name: IngredientType}> = [];
  ingredientsUnits: Array<{id: number, name: IngredientUnit}> = [];

  constructor(private ingredientsService: IngredientsService ) { }

  ngOnInit(): void {
    this.fetchIngredients();
    this.ingredientsTypes = this.ingredientsService.getIngredientsTypes();
    this.ingredientsUnits = this.ingredientsService.getIngredientsUnits();
  }

  deleteCardHandler(id: number) {
    this.ingredientsService.deleteIngredients(id)
      .subscribe(()=> {
        this.ingredientsList = this.ingredientsList.filter(item => item.id !== id);
      })
  }

  addCardHandler(item: IIngredientItem){
    if(!item.name.trim()){
      return
    }
    const newIngredient = {
      name: item.name,
      type: this.ingredientsTypes[+item.type]?.name,
      unit: this.ingredientsUnits[+item.unit]?.name,
    }
    this.ingredientsService.addIngredient(newIngredient).subscribe(ingredient => {
      this.ingredientsList = [...this.ingredientsList, ingredient];
    })
  }

  fetchIngredients(){
    this.loading = true;
    this.ingredientsService.getIngredients()
      .subscribe(ingredients =>{
        this.ingredientsList = ingredients;
        this.loading = false;
      })
  }

  test(item: any){
    this.search = item;
  }
}

