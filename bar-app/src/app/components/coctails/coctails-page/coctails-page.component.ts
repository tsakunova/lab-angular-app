import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatChip } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';
import { ICoctailItem, ICoctailTypes } from '../../shared/coctails/coctail-item.model';
import { CoctailsService } from '../../shared/coctails/coctails.service';
import { HistoryService } from '../../shared/history/history.service';
import { IHistoryItem } from '../../shared/history/history-item.model';
import { CoctailsFormComponent } from '../coctails-form/coctails-form.component';
import { IngredientsService } from '../../shared/ingredients/ingredients.service';
import { IIngredientItem } from '../../shared/ingredients/ingredients.model';

interface IConfig {
  typeForm: string;
  types: ICoctailTypes[];
  ingredients: IIngredientItem[];
}

@Component({
  selector: 'app-coctails-page',
  templateUrl: './coctails-page.component.html',
  styleUrls: ['./coctails-page.component.scss']
})
export class CoctailsPageComponent implements OnInit, OnDestroy {
  readonly subscription = new Subscription();

  isLoading = false;

  search = '';

  sortToTypes: ICoctailTypes[] = [];

  coctailsList: ICoctailItem[];

  ingredientTypeList: string[];

  ingredientList: IIngredientItem[] = [];

  coctailTypes: ICoctailTypes[] = [];



  config: IConfig = {
    ingredients: [],
    types: [],
    typeForm: '',
  };

  constructor(private coctailServise: CoctailsService,
              private historyService: HistoryService,
              private ingredientService: IngredientsService,
              public dialog: MatDialog,
              private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.fetchTypes();
    this.fetchCoctails();
    this.fetchIngredients();
    this.config.typeForm = 'add';
  }

  fetchTypes() {
    const subscriptionTypes = this.coctailServise.getCoctailsTypes().subscribe(types => {
      this.coctailTypes = types;
      this.config.types = this.coctailTypes;
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

  fetchCoctails() {
    this.isLoading = true;
    const subscriptionCoctails = this.coctailServise.getCoctails(this.sortToTypes).subscribe(coctails => {
      this.coctailsList = coctails;
      this.isLoading = false;
    });
    this.subscription.add(subscriptionCoctails);
  }

  getData() {
    const idsArr = this.sortToTypes.map(item => item.coctailsIds); // [[1,2],[3], [4]]
    const ids = Array.from(new Set(idsArr.flat())); // [1,2,3,4]
    const data = ids.filter(id => idsArr.every(item => item.includes(id)));
    (data.length === 0 && ids.length !== 0) && this.openSnackBar();
    const subscriptionData = this.coctailServise.getCoctails(data)
      .subscribe(coctails => {
        this.coctailsList = coctails;
        this.isLoading = false;
      });
    this.subscription.add(subscriptionData);
  }

  openSnackBar() {
    this.snackBar.open('No matches found', 'Ok');
  }

  addFavorite(id: number) {
    const coctail = this.coctailsList[id];
    coctail.favorite = !coctail.favorite;
    const subscriptionFavorite = this.coctailServise.editFavoriteField(id, coctail)
      .subscribe(() => {
        this.getData();
      });
    this.subscription.add(subscriptionFavorite);
  }

  addHistory(id: number) {
    const date = new Date();
    const historyItem: IHistoryItem = {
      coctailId: id,
      dateAdd: date
    };
    const subscriptionHistory = this.historyService.addHistoryItem(historyItem).subscribe();
    this.subscription.add(subscriptionHistory);
  }

  addCardHandler(item: any) {
    if (!item) {
      return;
    }
    const newCoctail = {
      favorite: item.formArray[2].favorite,
      imageSrc: item.formArray[0].imageSrc ? item.formArray[0].imageSrc : 'assets/img/coctails/no-image.jpg',
      name: item.formArray[0].name,
      typeId: item.formArray[0].type,
      composition: item.formArray[1].composition,
      recipe: item.formArray[2].recipe.split('\n'),
      description: item.formArray[2].description
    };
    const subscriptionAdd = this.coctailServise.addCoctail(newCoctail)
      .subscribe(httpCoctail => {
        this.coctailsList = [...this.coctailsList, httpCoctail];
        const allTypesForPush = item.formArray[0].type;
        allTypesForPush.forEach((type: number) => {
          const data: ICoctailTypes = this.coctailTypes.find(i => type === i.id) as ICoctailTypes;
          if (httpCoctail.id != null) {
            data.coctailsIds.push(httpCoctail.id);
          }
          const subscriptionEdit = this.coctailServise.editCoctailsTypes(type, data).subscribe();
          this.subscription.add(subscriptionEdit);
        });
      });
    this.subscription.add(subscriptionAdd);
  }

  openDialog() {
    const dialogRef = this.dialog.open(CoctailsFormComponent);
    const instance = dialogRef.componentInstance;
    this.config.typeForm = 'add';
    instance.config = this.config;
    dialogRef.afterClosed().subscribe(result => {
      this.addCardHandler(result);
    });
  }

  sortToType(coctailT: ICoctailTypes, chip: MatChip) {
    if (this.sortToTypes.includes(coctailT)) {
      this.sortToTypes = this.sortToTypes.filter(item => item !== coctailT);
    } else {
      this.sortToTypes = [...this.sortToTypes, coctailT];
    }
    this.getData();
    chip.toggleSelected();
  }

  searchHeandler(value: string) {
    this.search = value;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
    console.log('OnDestroy this.subscription.closed = ', this.subscription.closed);
  }
}
