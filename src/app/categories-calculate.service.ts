import { Injectable } from '@angular/core';
import {CollectionService} from './collection.service';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class CategoriesCalculateService {

  categoriesCollection: AngularFirestoreCollection;
  categories: Array<any>;
  expenditures: Array<any>;
  constructor(private collectionService: CollectionService) {
    this.categoriesCollection = collectionService.subscribeCollection('categories');
    this.collectionService.getCollection('categories')
      .subscribe(res => this.categories = res);
  }

  updateExpenditureSum(categoryName, amount) {
    debugger;
    this.categories.forEach(category => {
      if (category.title === categoryName) {
        const newValue = category.sum + amount;
        this.categoriesCollection.doc(category.id).update({sum: newValue});
      }
    });
  }
}
