import { Component, OnInit } from '@angular/core';
import {ICoctailItem} from "../../shared/coctails/coctail-item.model";
import {CoctailsService} from "../../shared/coctails/coctails.service";

@Component({
  selector: 'app-coctails-page',
  templateUrl: './coctails-page.component.html',
  styleUrls: ['./coctails-page.component.scss']
})
export class CoctailsPageComponent implements OnInit {
  isLoading = false;
  coctailsList: ICoctailItem[];

  constructor(private coctailServise: CoctailsService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.coctailServise.getCoctails()
      .subscribe(coctails =>{
      this.coctailsList = coctails
        this.isLoading = false;
    })
  }

}
