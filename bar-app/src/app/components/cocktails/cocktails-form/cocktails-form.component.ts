import {
  AfterContentInit,
  Component, EventEmitter, OnInit, Output
} from '@angular/core';
import {
  FormBuilder, FormGroup, Validators, FormArray
} from '@angular/forms';

import { ICocktailItem, IConfig } from '../../shared/cocktails/cocktail-item.model';

@Component({
  selector: 'app-cocktails-form',
  templateUrl: './cocktails-form.component.html',
  styleUrls: ['./cocktails-form.component.scss']
})
export class CocktailsFormComponent implements OnInit, AfterContentInit {
  isLinear = false;

  compositions = {
    composition: []
  };

  comp: FormArray;

  formGroup: FormGroup;

  formArray: FormArray;

  config: IConfig;

  @Output() addCard: EventEmitter<ICocktailItem> = new EventEmitter<ICocktailItem>();

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.comp = this.buildCompositionItem(this.compositions.composition);
    this.formArray = this.formBuilder.array(
      [this.formBuilder.group({
        name: ['', [Validators.minLength(2), Validators.required]],
        type: [[''], Validators.required],
        imageSrc: [''],
      }),
      this.formBuilder.group({
        composition: this.comp
      }),
      this.formBuilder.group({
        recipe: '',
        description: '',
        favorite: false,
      })
      ]
    );
    this.formGroup = this.formBuilder.group({ formArray: this.formArray });
  }

  get composition(): FormArray {
    return this.formGroup.get('formArray.1.composition') as FormArray;
  }

  ngAfterContentInit() {
    this.addIngredientField();
  }

  buildCompositionItem(ingredients: { id: number; amount: string }[]) {
    return this.formBuilder.array(ingredients.map(ingredient => this.formBuilder.group(ingredient)));
  }

  addIngredientField() {
    this.comp.push(this.formBuilder.group({ id: null, amount: null }));
  }

  removeIngredientField(i: number) {
    if (this.comp.length > 1) this.comp.removeAt(i);
    else this.comp.patchValue([{ id: null, amount: null }]);
  }
}
