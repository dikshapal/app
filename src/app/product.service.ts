import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Product } from './model/product';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private db: AngularFireDatabase) { }

  create(product) {
    return this.db.list('/products').push(product);
  }

  getAll() {
    return this.db.list('/products').valueChanges();
  }
  // getAll() {     return this.db.list('/products').snapshotChanges()     .map(changes => {       return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));   }); }


  // getAll () {
  //   return this.db.list('/products', ref => ref.orderByChild('title'))
  //     .snapshotChanges().pipe(
  //       map(products => products.map(product => {
  //         const key = product.payload.key;
  //         const data = product.payload.val();
  //         return {key, ...data} as Product;
  //       }))
  //     );
  // }
  get(productId) {
    return this.db.object('/products/' + productId).valueChanges();
  }
  update(productId, product) {
    return this.db.object('/products/' + productId).update(product);
  }

  delete(productId) {
    this.db.object('/products/' + productId).remove();
  }
}
