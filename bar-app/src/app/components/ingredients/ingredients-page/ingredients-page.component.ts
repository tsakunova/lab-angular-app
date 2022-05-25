import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatChip } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { IngredientsService } from '../../shared/ingredients/ingredients.service';
import { IIngredientItem, IngredientsModel, IngredientUnitModel } from '../../shared/ingredients/ingredients.model';
import { sortDirectionType, sortType } from '../../shared/enums';
import { IngredientsFormComponent } from '../ingredients-form/ingredients-form.component';

@Component({
  selector: 'app-ingredients-page',
  templateUrl: './ingredients-page.component.html',
  styleUrls: ['./ingredients-page.component.scss']
})

export class IngredientsPageComponent implements OnInit, OnDestroy {
  readonly subscription = new Subscription();

  isLoading = false;

  search = '';

  sort: string = sortType.type;

  sortToTypes: string[] = [];

  sortDirection: sortDirectionType = sortDirectionType.up;

  ingredientsList: IIngredientItem[] = [];

  ingredientsTypes: Array<{ id: number; name: IngredientsModel }> = [];

  ingredientsUnits: Array<{ id: number; name: IngredientUnitModel }> = [];

  config: any = {
    types: [],
    units: [],
    typeForm: ''
  };

  constructor(private ingredientsService: IngredientsService, public dialog: MatDialog) {
  }

  ngOnInit(): void {
    this.ingredientsTypes = this.ingredientsService.getIngredientsTypes();
    this.ingredientsUnits = this.ingredientsService.getIngredientsUnits();
    this.config.types = this.ingredientsTypes;
    this.config.units = this.ingredientsUnits;
    this.config.typeForm = 'add';
    this.fetchIngredients();
  }

  deleteCardHandler(id: number) {
    const subscriptionDel = this.ingredientsService.deleteIngredients(id)
      .subscribe(() => {
        this.ingredientsList = this.ingredientsList.filter(item => item.id !== id);
      });
    this.subscription.add(subscriptionDel);
  }

  addCardHandler(item: IIngredientItem) {
    if (!item || !item.name.trim()) {
      return;
    }
    const newIngredient = {
      name: item.name,
      type: this.ingredientsTypes[+item.type]?.name,
      unit: this.ingredientsUnits[+item.unit]?.name,
    };
    const subscriptionAdd = this.ingredientsService.addIngredient(newIngredient).subscribe(ingredient => {
      this.ingredientsList = [...this.ingredientsList, ingredient];
    });
    this.subscription.add(subscriptionAdd);
  }

  fetchIngredients() {
    this.isLoading = true;
    const subscriptionIngred = this.ingredientsService.getIngredients(this.sortToTypes)
      .subscribe(ingredients => {
        this.ingredientsList = ingredients;
        this.isLoading = false;
      });
    this.subscription.add(subscriptionIngred);
  }

  searchHeandler(value: string) {
    this.search = value;
  }

  sortHeandler(value: string) {
    this.sort = value;
  }

  sortDirectionHeandler(value: any) {
    this.sortDirection = value;
  }

  sortToType(sortItem: string, chip: MatChip) {
    if (this.sortToTypes.includes(sortItem)) {
      this.sortToTypes = this.sortToTypes.filter(item => item !== sortItem);
    } else {
      this.sortToTypes = [...this.sortToTypes, sortItem];
    }
    this.getIngredients();
    chip.toggleSelected();
  }

  getIngredients() {
    let data = [];
    this.isLoading = true;
    const allTypes = this.ingredientsTypes.map(item => item.name);
    if (!this.sortToTypes.length) {
      data = allTypes;
    } else {
      data = allTypes.filter(item => this.sortToTypes.includes(item));
    }
    const subscriptionIngredients = this.ingredientsService.getIngredients(data).subscribe(ingredients => {
      this.ingredientsList = ingredients;
      this.isLoading = false;
    });
    this.subscription.add(subscriptionIngredients);
  }

  openDialog() {
    const dialogRef = this.dialog.open(IngredientsFormComponent);
    const instance = dialogRef.componentInstance;
    this.config.typeForm = 'add';
    instance.config = this.config;
    dialogRef.afterClosed().subscribe(result => {
      this.addCardHandler(result);
    });
  }

  editCardHandler(id: number) {
    const dialogRef = this.dialog.open(IngredientsFormComponent);
    const instance = dialogRef.componentInstance;
    this.config.typeForm = 'edit';
    instance.config = this.config;
    dialogRef.afterClosed().subscribe(result => {
      if (!result || !result.name.trim()) {
        return;
      }
      const ingredient = {
        name: result.name,
        type: this.ingredientsTypes[+result.type]?.name,
        unit: this.ingredientsUnits[+result.unit]?.name,
      };
      const subscriptionEdit = this.ingredientsService.editIngredient(id, ingredient)
        .subscribe(() => {
          this.getIngredients();
        });
      this.subscription.add(subscriptionEdit);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('OnDestroy this.subscription.closed = ', this.subscription.closed);
  }
}
