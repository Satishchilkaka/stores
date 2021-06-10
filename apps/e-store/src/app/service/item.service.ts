import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore'
import { Observable } from 'rxjs';
import {Item} from '../models/item.service'


@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemsCollection!: AngularFirestoreCollection<Item>;
  items:Observable<any[]>

  constructor(public afs: AngularFirestore) {
    this.items = this.afs.collection('items', ref => ref.orderBy('title', 'asc')).valueChanges();
   }
   getItems() {
     return this.items
   }
}

