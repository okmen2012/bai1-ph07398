import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../Product';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {
  @Input('data') product: Product;
  constructor() { }

  ngOnInit() {
  }

}