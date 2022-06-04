import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatChip } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { ICocktailItem, ICocktailTypes, IConfig } from '../../shared/cocktails/cocktail-item.model';
import { CocktailsService } from '../../shared/cocktails/cocktails.service';
import { HistoryService } from '../../shared/history/history.service';
import { IHistoryItem } from '../../shared/history/history-item.model';
import { CocktailsFormComponent } from '../cocktails-form/cocktails-form.component';
import { IngredientsService } from '../../shared/ingredients/ingredients.service';
import { IIngredientItem } from '../../shared/ingredients/ingredients.model';

interface Idata {
  formArray: ICocktailItem[];
}

@Component({
  selector: 'app-cocktails-page',
  templateUrl: './cocktails-page.component.html',
  styleUrls: ['./cocktails-page.component.scss'],
})
export class CocktailsPageComponent implements OnInit, OnDestroy {
  readonly subscription = new Subscription();

  isLoading = false;

  search = '';

  sortToTypes: ICocktailTypes[] = [];

  cocktailsList: ICocktailItem[];

  ingredientTypeList: string[];

  ingredientList: IIngredientItem[] = [];

  cocktailTypes: ICocktailTypes[] = [];

  config: IConfig = {
    ingredients: [],
    types: [],
    typeForm: '',
  };

  constructor(private cocktailServise: CocktailsService,
              private historyService: HistoryService,
              private ingredientService: IngredientsService,
              public dialog: MatDialog,
              private snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
    this.isLoading = true;
    this.fetchTypes();
    this.fetchCocktails();
    this.fetchIngredients();
    this.config.typeForm = 'add';
  }

  fetchTypes() {
    const subscriptionTypes = this.cocktailServise.getCocktailsTypes().subscribe(types => {
      this.cocktailTypes = types;
      this.config.types = this.cocktailTypes;
    });
    this.subscription.add(subscriptionTypes);
  }

  fetchIngredients() {
    this.ingredientTypeList = this.ingredientService.getIngredientsTypes().map(item => item.name);
    const subscriptionIngredients = this.ingredientService.getIngredients(this.ingredientTypeList).subscribe(list => {
      this.ingredientList = list;
      this.config.ingredients = this.ingredientList;
    });
    this.subscription.add(subscriptionIngredients);
  }

  fetchCocktails() {
    this.isLoading = true;
    const subscriptionCocktails = this.cocktailServise.getCocktails(
      this.sortToTypes.map(item => item.id)
    ).subscribe(cocktails => {
      this.cocktailsList = cocktails;
      this.isLoading = false;
    });
    this.subscription.add(subscriptionCocktails);
  }

  getData() {
    const idsArr = this.sortToTypes.map(item => item.cocktailsIds); // [[1,2],[3], [4]]
    const ids = Array.from(new Set(idsArr.flat())); // [1,2,3,4]
    const data = ids.filter(id => idsArr.every(item => item.includes(id)));
    if ((data.length === 0 && idsArr.length !== 0) || (data.length === 0 && ids.length !== 0)) {
      this.openSnackBar();
    }
    const subscriptionData = this.cocktailServise.getCocktails(data)
      .subscribe(cocktails => {
        this.cocktailsList = cocktails;
        this.isLoading = false;
      });
    this.subscription.add(subscriptionData);
  }

  openSnackBar() {
    this.snackBar.open('No matches found', 'Ok');
  }

  addFavorite(id: number) {
    const cocktail = this.cocktailsList[id];
    cocktail.favorite = !cocktail.favorite;
    const subscriptionFavorite = this.cocktailServise.editFavoriteField(id, cocktail)
      .subscribe(() => {
        this.getData();
      });
    this.subscription.add(subscriptionFavorite);
  }

  addHistory(id: number) {
    const date = new Date();
    const historyItem: IHistoryItem = {
      cocktailId: id,
      dateAdd: date
    };
    const subscriptionHistory = this.historyService.addHistoryItem(historyItem).subscribe();
    this.subscription.add(subscriptionHistory);
  }

  addCardHandler(item: Idata) {
    if (!item) {
      return;
    }
    const newCocktail = {
      favorite: item.formArray[2].favorite,
      imageSrc: item.formArray[0].imageSrc ? item.formArray[0].imageSrc : 'assets/img/cocktails/no-image.jpg',
      name: item.formArray[0].name,
      typeId: item.formArray[0].typeId,
      composition: item.formArray[1].composition,
      recipe: item.formArray[2].recipe,
      description: item.formArray[2].description
    };
    const subscriptionAdd = this.cocktailServise.addCocktail(newCocktail)
      .subscribe(httpCocktail => {
        this.cocktailsList = [...this.cocktailsList, httpCocktail];
        const allTypesForPush = item.formArray[0].typeId;
        allTypesForPush.forEach((type: number) => {
          const data: ICocktailTypes = this.cocktailTypes.find(i => type === i.id) as ICocktailTypes;
          if (httpCocktail.id != null) {
            data.cocktailsIds.push(httpCocktail.id);
          }
          const subscriptionEdit = this.cocktailServise.editCocktailsTypes(type, data).subscribe();
          this.subscription.add(subscriptionEdit);
        });
      });
    this.subscription.add(subscriptionAdd);
  }

  openDialog() {
    const dialogRef = this.dialog.open(CocktailsFormComponent);
    const instance = dialogRef.componentInstance;
    this.config.typeForm = 'add';
    instance.config = this.config;
    dialogRef.afterClosed().subscribe(result => {
      this.addCardHandler(result);
    });
  }

  sortToType(cocktailT: ICocktailTypes, chip: MatChip) {
    if (this.sortToTypes.includes(cocktailT)) {
      this.sortToTypes = this.sortToTypes.filter(item => item !== cocktailT);
    } else {
      this.sortToTypes = [...this.sortToTypes, cocktailT];
    }
    this.getData();
    chip.toggleSelected();
  }

  searchHeandler(value: string) {
    this.search = value;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
