import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/category.service';
import { ProductService } from 'src/app/product.service';
import { Router, ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/take';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent implements OnInit {

  categories$;
  product;
  id;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private categoryService: CategoryService,
    private productService: ProductService
    ) {
    this.categories$ = categoryService.getAll();
    this.product = this.productService.getAll();

    this.id =this.route.snapshot.paramMap.get('id');
    if (this.id) this.productService.get(this.id).take(1).subscribe(p => this.product = p);
    
   }

   save(product) {
     if(this.id) this.productService.update(this.id, product);
    else this.productService.create(product);
     this.router.navigate(['/admin/products']);
   }

   delete(){
     if(!confirm('Sure?')) return;
     
       this.productService.delete(this.id);
       this.router.navigate(['/admin/products']);

     
   }
  ngOnInit() {
  }

}
