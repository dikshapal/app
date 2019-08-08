import { Component, OnInit, OnDestroy } from '@angular/core';
import { ProductService } from 'src/app/product.service';
import { Observable, Subscription } from 'rxjs-compat';
import {Product} from 'src/app/model/product';
 

@Component({
  selector: 'app-admin-products',
  templateUrl: './admin-products.component.html',
  styleUrls: ['./admin-products.component.css']
})
export class AdminProductsComponent implements OnInit {
  products$;
  filteredProducts: Product[];
  subscription: Subscription;
 
  
    constructor(private productService: ProductService) { 
      this.products$ = productService.getAll();
    }
  
 
  filter(query: string) {
    this.filteredProducts = (query) ?
      this.products$.filter(p => p.title.toLowerCase().includes(query.toLowerCase())) :
      this.products$;
  }
  ngOnInit() {
  }
  // ngOnDestroy(): void {
  //   this.subscription.unsubscribe();
  // }
}
