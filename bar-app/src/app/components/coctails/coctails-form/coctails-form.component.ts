import {
  AfterContentInit,
  Component, EventEmitter, OnInit, Output
} from '@angular/core';
import {
  FormBuilder, FormGroup, Validators, FormArray
} from '@angular/forms';

import { ICoctailItem } from '../../shared/coctails/coctail-item.model';

@Component({
  selector: 'app-coctails-form',
  templateUrl: './coctails-form.component.html',
  styleUrls: ['./coctails-form.component.scss']
})
export class CoctailsFormComponent implements OnInit, AfterContentInit {
  isLinear = false;

  compositions = {
    composition: []
  };

  comp: FormArray;

  formGroup: FormGroup;

  formArray: any;

  filteredIngredients: any;

  config: { ingredients: any[]; types: any[]; typeForm: string };

  @Output() addCard: EventEmitter<ICoctailItem> = new EventEmitter<ICoctailItem>();

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

  /* addCoctail() {
    if (this.formGroup.valid) {
      const formData: any = { ...this.formGroup.value };
      this.addCard.emit(formData);
      this.formGroup.reset();
    }
  } */
  removeIngredientField(i: number) {
    if (this.comp.length > 1) this.comp.removeAt(i);
    else this.comp.patchValue([{ id: null, amount: null }]);
  }
}
