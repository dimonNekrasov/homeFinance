import { Component, OnInit } from '@angular/core';
import { CollectionService } from '../collection.service';
import * as firebase from 'firebase';
import Timestamp = firebase.firestore.Timestamp;
import {CategoriesCalculateService} from '../categories-calculate.service';

interface Expenditure {
  amount: number;
  category: string;
  date: Timestamp;
  description: string;
  icon: string;
  newValue: number;
  oldValue: number;
  sourceName: string;
  sourceType: string;
}

@Component({
  selector: 'app-expenditures',
  templateUrl: './expenditures.component.html',
  styleUrls: ['./expenditures.component.css']
})
export class ExpendituresComponent implements OnInit {

  expenditureCollection: any;
  expenditures: Array<Expenditure>;

  constructor(private collectionService: CollectionService, private categoriesService: CategoriesCalculateService) {
    this.expenditureCollection = collectionService.subscribeCollection('expenditures');
    this.collectionService.getCollection('expenditures')
      .subscribe(res => this.expenditures = res);
  }

  ngOnInit(): void {
  }

  formatDate(time: Timestamp) {
    return time.toDate().toLocaleDateString();
  }

  addExpend() {
    this.categoriesService.updateExpenditureSum('Питание', 123);
  }

}
