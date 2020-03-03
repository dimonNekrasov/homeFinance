import {Component} from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection} from '@angular/fire/firestore';
import 'firebase/firestore';
import {map} from 'rxjs/operators';

export interface Users {
  name: string;
  cash: number;
}

export interface Categories {
  name: string;
}

export interface Collection {
  name: string;
  collection: AngularFirestoreCollection;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  collections: Array<Collection>;
  usersCollection: AngularFirestoreCollection<Users>;
  categoriesCollection: AngularFirestoreCollection<Categories>;
  title = 'homeFinance';

  users: Array<Users>;
  categories: Array<Categories>;

  constructor(private afs: AngularFirestore) {
    this.usersCollection = this.getCollection('users')
      .subscribe(res => this.users = res);
    this.categoriesCollection = this.getCollection('categories')
      .subscribe(res => this.categories = res);
  }

  getCollection(collection): any {
    return this.afs.collection(collection).snapshotChanges().pipe(
      map(items => items.map(user => {
        const data = user.payload.doc.data() as {};
        const id = user.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  // getUsers() {
  //   return this.usersCollection.snapshotChanges().pipe(
  //
  //   );
  // }
  // getCategories() {
  //   return this.categoriesCollection.snapshotChanges().pipe(
  //     map(categories => categories.map(a => {
  //       const data = a.payload.doc.data() as Categories ;
  //       const id = a.payload.doc.id;
  //       return { id, ...data };
  //     }))
  //   );
  // }

  addCash(amount) {
    console.log(this.users);
    console.log(this.categories);
    console.log(this.collections);
    console.log(this.categoriesCollection);
    console.log(this.usersCollection);
    debugger
    // amount = 99999;
    // console.log(this.testList);
    // debugger
    // const data = {
    //   cash: amount
    // }
    // this.itemsCollection.doc(this.testList[0].id).update(data);
  }

  addCategory() {
    // this.itemsCollection
  }
}
