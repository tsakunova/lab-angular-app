import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { ICocktailItem, ICocktailTypes } from '../../shared/cocktails/cocktail-item.model';
import { CocktailsService } from '../../shared/cocktails/cocktails.service';
import { IIngredientItem, IngredientsModel } from '../../shared/ingredients/ingredients.model';
import { IngredientsService } from '../../shared/ingredients/ingredients.service';

@Component({
  selector: 'app-cocktails-current-card',
  templateUrl: './cocktails-current-card.component.html',
  styleUrls: ['./cocktails-current-card.component.scss']
})
export class CocktailsCurrentCardComponent implements OnInit, OnDestroy {
  readonly subscription = new Subscription();

  isLoading = false;

  ingredients: IIngredientItem[];

  currentItem: ICocktailItem;

  ingredientTypes: IngredientsModel[];

  types: ICocktailTypes[];

  constructor(private route: ActivatedRoute,
              private cocktailsService: CocktailsService,
              private ingredientService: IngredientsService) { }

  ngOnInit(): void {
    this.isLoading = true;
    const subscriptionCoctTypes = this.cocktailsService.getCocktailsTypes()
      .subscribe(types => {
        this.types = types;
      });
    this.subscription.add(subscriptionCoctTypes);
    this.ingredientTypes = this.ingredientService.getIngredientsTypes().map(item => item.name);
    const subscriptionIngred = this.ingredientService.getIngredients(this.ingredientTypes)
      .subscribe(list => this.ingredients = list);
    this.subscription.add(subscriptionIngred);
    const subscriptionCocktail = this.cocktailsService.getCocktail(this.route.snapshot.paramMap.get('id'))
      .subscribe(cocktail => {
        this.currentItem = cocktail;
        this.isLoading = false;
      });
    this.subscription.add(subscriptionCocktail);
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

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    console.log('OnDestroy this.subscription.closed = ', this.subscription.closed);
  }
}
