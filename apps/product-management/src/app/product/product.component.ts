import { Component, OnInit } from '@angular/core';
import { Product } from './product';

@Component({
  selector: 'nxdemo-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  products : Product[] = [
    {
      id: 1,
      name: 'Product 1',
      description: 'This is product 1',
      price: 100,
    },
    {
      id: 2,
      name: 'Product 2',
      description: 'This is product 2',
      price: 200,
    },
    {
      id: 3,
      name: 'Product 3',
      description: 'This is product 3',
      price: 300,
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
