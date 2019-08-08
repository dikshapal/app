import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs-compat/operator/map';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  categories: Observable<any[]>;
 
  constructor(private db: AngularFireDatabase) { }

  // getCategories() {
  //   return this.db.list('/categories/', {
  //     query: {
  //       orderByChild: 'name'
  //     }
  //   });
  // }

  getAll() {
  return this.db.list('/categories',
   ref => ref.orderByChild('name')).snapshotChanges();
  }
}
