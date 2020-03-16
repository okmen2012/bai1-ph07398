import { Component, OnInit } from '@angular/core';
import {product} from '../Product';
import {Data} from '../Mockdata';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
products= Data;
}