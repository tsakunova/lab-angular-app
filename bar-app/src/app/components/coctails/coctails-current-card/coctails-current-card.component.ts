import {Component} from '@angular/core';
import {ICoctailItem} from "../../shared/coctails/coctail-item.model";
import {ActivatedRoute} from "@angular/router";
import {CoctailsService} from "../../shared/coctails/coctails.service";

@Component({
  selector: 'app-coctails-current-card',
  templateUrl: './coctails-current-card.component.html',
  styleUrls: ['./coctails-current-card.component.scss']
})
export class CoctailsCurrentCardComponent{
  isLoading = false;
  currentItem: ICoctailItem;
  constructor( private route: ActivatedRoute, private coctailsService: CoctailsService) { }

  ngOnInit(): void {
    this.isLoading= true;
   this.coctailsService.getCoctail(this.route.snapshot.paramMap.get('id'))
     .subscribe(coctail =>{
       this.currentItem = coctail
       this.isLoading = false;
     })
  }
}
