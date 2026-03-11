import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ProductsService } from '../../service/products.service';
import { debounce, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Iproducts } from '../../model/products';

@Component({
  selector: 'app-products-search',
  templateUrl: './products-search.component.html',
  styleUrls: ['./products-search.component.scss']
})
export class ProductsSearchComponent implements OnInit {
  productsSearchCon = new FormControl()
  productsArr : Array<Iproducts> = []

  constructor(
    private _productsService : ProductsService
  ) { }

  ngOnInit(): void {
    this.getProductsSearch()
  }

  getProductsSearch(){
    this.productsSearchCon.valueChanges.pipe(
      debounceTime(500),
      distinctUntilChanged(),
      switchMap(val => this._productsService.fetchSearchProduct(val))
    )
    .subscribe({
      next: data => {
        console.log(data)
        this.productsArr = data.products
      },
      error: err => {
        console.log(err)
      }
    })
    
  }

}


