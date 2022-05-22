import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICoctailItem, ICoctailTypes } from '../../shared/coctails/coctail-item.model';
import { CoctailsService } from '../../shared/coctails/coctails.service';

@Component({
  selector: 'app-coctails-current-card',
  templateUrl: './coctails-current-card.component.html',
  styleUrls: ['./coctails-current-card.component.scss']
})
export class CoctailsCurrentCardComponent implements OnInit {
  isLoading = false;

  currentItem: ICoctailItem;

  types: ICoctailTypes[];

  constructor(private route: ActivatedRoute, private coctailsService: CoctailsService) { }

  ngOnInit(): void {
    this.isLoading = true;
    this.coctailsService.getCoctailsTypes()
      .subscribe(types => {
        this.types = types;
      });
    this.coctailsService.getCoctail(this.route.snapshot.paramMap.get('id'))
      .subscribe(coctail => {
        this.currentItem = coctail;
        this.isLoading = false;
      });
  }
}
