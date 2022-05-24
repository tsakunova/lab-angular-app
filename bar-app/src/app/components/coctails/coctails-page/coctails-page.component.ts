import { Component, OnInit } from '@angular/core';
import { MatChip } from '@angular/material/chips';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ICoctailItem, ICoctailTypes } from '../../shared/coctails/coctail-item.model';
import { CoctailsService } from '../../shared/coctails/coctails.service';
import { HistoryService } from '../../shared/history/history.service';
import { IHistoryItem } from '../../shared/history/history-item.model';
import { CoctailsFormComponent } from '../coctails-form/coctails-form.component';
import { IngredientsService } from '../../shared/ingredients/ingredients.service';
import { IIngredientItem } from '../../shared/ingredients/ingredients.model';

@Component({
  selector: 'app-coctails-page',
  templateUrl: './coctails-page.component.html',
  styleUrls: ['./coctails-page.component.scss']
})
export class CoctailsPageComponent implements OnInit {
  isLoading = false;

  search = '';

  sortToTypes: ICoctailTypes[] = [];

  coctailsList: ICoctailItem[];

  ingredientTypeList: string[];

  ingredientList: IIngredientItem[] = [];

  coctailTypes: ICoctailTypes[] = [];

  config: any = {
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
    this.coctailServise.getCoctailsTypes()
      .subscribe(types => {
        this.coctailTypes = types;
        this.config.types = this.coctailTypes;
      });
  }

  fetchIngredients() {
    this.ingredientTypeList = this.ingredientService.getIngredientsTypes().map(item => item.name);
    this.ingredientService.getIngredients(this.ingredientTypeList)
      .subscribe(list => {
        this.ingredientList = list;
        this.config.ingredients = this.ingredientList;
      });
  }

  fetchCoctails() {
    this.isLoading = true;
    this.coctailServise.getCoctails(this.sortToTypes)
      .subscribe(coctails => {
        this.coctailsList = coctails;
        this.isLoading = false;
      });
  }

  getData() {
    const idsArr = this.sortToTypes.map(item => item.coctailsIds); // [[1,2],[3], [4]]
    const ids = Array.from(new Set(idsArr.flat())); // [1,2,3,4]
    const data = ids.filter(id => idsArr.every(item => item.includes(id)));
    (data.length === 0 && ids.length !== 0) && this.openSnackBar();
    this.coctailServise.getCoctails(data)
      .subscribe(coctails => {
        this.coctailsList = coctails;
        this.isLoading = false;
      });
  }

  openSnackBar() {
    this.snackBar.open('No matches found', 'Ok');
  }

  addFavorite(id: number) {
    const coctail = this.coctailsList[id];
    coctail.favorite = !coctail.favorite;
    this.coctailServise.editFavoriteField(id, coctail)
      .subscribe(() => {
        this.getData();
      });
  }

  addHistory(id: number) {
    const date = new Date();
    const historyItem: IHistoryItem = {
      coctailId: id,
      dateAdd: date
    };
    this.historyService.addHistoryItem(historyItem).subscribe();
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
    this.coctailServise.addCoctail(newCoctail)
      .subscribe(httpCoctail => {
        this.coctailsList = [...this.coctailsList, httpCoctail];
        const allTypesForPush = item.formArray[0].type;
        allTypesForPush.forEach((type: number) => {
          const data: ICoctailTypes = this.coctailTypes.find(i => type === i.id) as ICoctailTypes;
          if (httpCoctail.id != null) {
            data.coctailsIds.push(httpCoctail.id);
          }
          this.coctailServise.editCoctailsTypes(type, data).subscribe();
        });
      });
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
}
