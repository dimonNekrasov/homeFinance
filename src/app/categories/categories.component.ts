import {Component, OnInit} from '@angular/core';
import {CollectionService} from '../collection.service';
import {FormControl} from '@angular/forms';
import {AngularFirestoreCollection} from '@angular/fire/firestore';
import {Users} from '../app.component';

export interface Categories {
  id?: string;
  title: string;
  sum: number;
}

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  categories: Array<Categories>;
  categoriesCollection: AngularFirestoreCollection<any>;
  categoryName = new FormControl('');
  constructor(private collectionService: CollectionService) {
    this.categoriesCollection = collectionService.subscribeCollection('categories');
    this.collectionService.getCollection('categories')
      .subscribe(res => this.categories = res);
  }

  ngOnInit(): void {
  }

  addCategory() {
    const data = {
      title: this.categoryName.value
    };
    // const id = this.categoriesCollection.
    this.categoriesCollection.add(data);
    console.log(this.categoryName);
    console.log('add');
    debugger
  }

  removeCategory(id) {
    this.categoriesCollection.doc(id).delete();
    debugger
    console.log(id);
    console.log('remove');
  }

}
