import {Component, EventEmitter, Input, Output} from '@angular/core';
import {
  IIngredientItem,
  IngredientType,
  IngredientUnit
} from "../../shared/ingredients/ingredient-item.model";

@Component({
  selector: 'app-ingredients-form',
  templateUrl: './ingredients-form.component.html',
  styleUrls: ['./ingredients-form.component.scss']
})
export class IngredientsFormComponent{
  name = '';
  type = '';
  unit = '';

  @Input() ingredientsType: any;
  @Input() ingredientsUnit: any;

  @Output() addCard: EventEmitter<IIngredientItem> = new EventEmitter<IIngredientItem>();

  constructor() { }

  addIngredient(){
    const ingredient:  IIngredientItem = {
      name: this.name,
      type: this.type,
      unit: this.unit
    }
    this.addCard.emit(ingredient);
    this.name = '';
  }

  onTypeChanged(value: IngredientType) {
    this.type = value;
  }

  onUnitChanged(value: IngredientUnit) {
    this.unit = value;
  }

}
