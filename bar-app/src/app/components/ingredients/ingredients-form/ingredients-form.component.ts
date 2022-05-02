import {Component, EventEmitter, Input, Output} from '@angular/core';
import {
  IngredientForSave,
  IngredientType,
  IngredientUnit
} from "../../shared/ingredients/ingredient-item.model";

@Component({
  selector: 'app-ingredients-form',
  templateUrl: './ingredients-form.component.html',
  styleUrls: ['./ingredients-form.component.scss']
})
export class IngredientsFormComponent{
  @Input() ingredientsTypes: any;
  @Input() ingredientsUnits: any;
  name = '';
  type = '';
  unit = '';
 @Output() addCard: EventEmitter<IngredientForSave> = new EventEmitter<IngredientForSave>();
  constructor() { }
  addIngredient(){
    const ingredient:  IngredientForSave = {
      name: this.name,
      type: this.type,
      unit: this.unit
    }
    this.addCard.emit(ingredient);
  }
  onTypeChanged(value: IngredientType) {
    this.type = value;
  }
  onUnitChanged(value: IngredientUnit) {
    this.unit = value;
  }

}
