import { Component, OnInit } from "@angular/core";
import { Product } from "../Product";
import { ProductService } from "../service/product.service";


@Component({
  selector: "app-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit {

  selected : Product;
  products : Product[];

  constructor(
    private productService: ProductService
  ) {}

  ngOnInit() {
    this.getProducts();
  }
  
  // showDetail(product) {
  //   this.selected = product;
  // }
  removeItem(id){
    this.products = this.productService.removeProduct(id);
  }

  getProducts(){
    this.products = this.productService.getProducts();
  }
}
