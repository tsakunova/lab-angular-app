import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { IMyBar } from '../../shared/mybar/mybar-item.model';
import { MybarService } from '../../shared/mybar/mybar.service';
import { IngredientsService } from '../../shared/ingredients/ingredients.service';
import { IIngredientItem } from '../../shared/ingredients/ingredients.model';

@Component({
  selector: 'app-mybar-page',
  templateUrl: './mybar-page.component.html',
  styleUrls: ['./mybar-page.component.scss']
})
export class MybarPageComponent implements OnInit, OnDestroy {
  readonly subscription = new Subscription();

  myBar: IMyBar;

  isLoading = false;

  ingredientList: IIngredientItem[];

  inBar: IIngredientItem[];

  toBuy: IIngredientItem[];

  toBuyShopList: string;

  constructor(private mybarService: MybarService,
              private ingredientService: IngredientsService) {}

  getMyBarData() {
    this.isLoading = true;
    const subscriptionData = this.mybarService.getMyBarItems()
      .subscribe(data => {
        this.myBar = data;
        this.isLoading = false;
        this.fetchIngredients();
      });
    this.subscription.add(subscriptionData);
  }

  fetchIngredients() {
    const subscriptionIngredients = this.ingredientService.getIngredients([]).subscribe(list => {
      this.ingredientList = list;
      this.inBar = this.ingredientList.filter((item) => ((this.myBar.inbar).includes(Number(item.id))));
      this.toBuy = this.ingredientList.filter((item) => ((this.myBar.tobuy).includes(Number(item.id))));
      this.toBuyShopList = this.toBuy.map(item => item.name).join(', ');
    });
    this.subscription.add(subscriptionIngredients);
  }

  reloadMybar(data: IMyBar) {
    this.toBuyShopList = this.ingredientList.filter((item) => ((data.tobuy).includes(Number(item.id)))).map(item => item.name).join(', ');
    const subscriptionReload = this.mybarService.reloadInBarItems(data).subscribe();
    this.subscription.add(subscriptionReload);
  }

  ngOnInit(): void {
    this.getMyBarData();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
