import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CollectionService {

  constructor(private afs: AngularFirestore) {
  }

  subscribeCollection(collectionName) {
    return this.afs.collection(collectionName);
  }

  getCollection(collectionName): any {
    return this.afs.collection(collectionName).snapshotChanges().pipe(
      map(items => items.map(item => {
        const data = item.payload.doc.data() as {};
        const id = item.payload.doc.id;
        return {id, ...data};
      }))
    );
  }

  createId() {
    return this.afs.createId();
  }
}
