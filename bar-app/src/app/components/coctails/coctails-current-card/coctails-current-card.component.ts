import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICoctailItem, ICoctailTypes } from '../../shared/coctails/coctail-item.model';
import { CoctailsService } from '../../shared/coctails/coctails.service';
import { IIngredientItem, IngredientsModel } from '../../shared/ingredients/ingredients.model';
import { IngredientsService } from '../../shared/ingredients/ingredients.service';

@Component({
  selector: 'app-coctails-current-card',
  templateUrl: './coctails-current-card.component.html',
  styleUrls: ['./coctails-current-card.component.scss']
})
export class CoctailsCurrentCardComponent implements OnInit {
  isLoading = false;

  ingredients: IIngredientItem[];

  currentItem: ICoctailItem;

  ingredientTypes: IngredientsModel[];

  types: ICoctailTypes[];

  constructor(private route: ActivatedRoute,
              private coctailsService: CoctailsService,
              private ingredientService: IngredientsService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.coctailsService.getCoctailsTypes()
      .subscribe(types => {
        this.types = types;
      });
    this.ingredientTypes = this.ingredientService.getIngredientsTypes().map(item => item.name);
    this.ingredientService.getIngredients(this.ingredientTypes).subscribe(list => this.ingredients = list);
    this.coctailsService.getCoctail(this.route.snapshot.paramMap.get('id'))
      .subscribe(coctail => {
        this.currentItem = coctail;
        this.isLoading = false;
      });
  }

  getNameIngredient(ingredId: number) {
    return this.ingredients.find(item => item.id === ingredId)?.name;
  }

  getNameUnit(ingredId: number) {
    return this.ingredients.find(item => item.id === ingredId)?.unit;
  }

  getNameType(typeId: number) {
    return this.types.find(item => item.id === typeId)?.name;
  }
}
