import {
  Component, EventEmitter, OnInit, Output
} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IIngredientItem } from '../../shared/ingredients/ingredients.model';

@Component({
  selector: 'app-ingredients-form',
  templateUrl: './ingredients-form.component.html',
  styleUrls: ['./ingredients-form.component.scss']
})
export class IngredientsFormComponent implements OnInit {
  form: FormGroup;

  config: { types: any[]; units: any[]; typeForm: string };

  @Output() addCard: EventEmitter<IIngredientItem> = new EventEmitter<IIngredientItem>();

  constructor() {
  }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', [Validators.minLength(2), Validators.required]),
      type: new FormControl('', Validators.required),
      unit: new FormControl('', Validators.required)
    });
  }

  addIngredient() {
    if (this.form.valid) {
      const formData: IIngredientItem = { ...this.form.value };
      this.addCard.emit(formData);
      this.form.reset();
    }
  }
}
