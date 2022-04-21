import { Component, OnInit } from '@angular/core';
import {IngredientsService} from "../../shared/ingredients/ingredients.service";
import {IngredientItem} from "../../shared/ingredients/ingredient-item.model";

@Component({
  selector: 'app-ingredients-page',
  templateUrl: './ingredients-page.component.html',
  styleUrls: ['./ingredients-page.component.scss']
})
export class IngredientsPageComponent implements OnInit {
  ingredientsList: IngredientItem[]

  constructor(private ingredientsService: IngredientsService ) { }

  ngOnInit(): void {
    this.ingredientsList = this.ingredientsService.getIngredients();
  }

  deleteCardHandler(id: number) {
    this.ingredientsList = this.ingredientsList.filter(item => item.id !== id);
  }

}
