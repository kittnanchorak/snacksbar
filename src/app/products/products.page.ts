import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-products-page',
  templateUrl: './home.page.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPage implements OnInit {
  category: string = '';
  products: any[] = [];

  allProducts: { [key: string]: { name: string; price: number }[] } = {
    electronics: [
      { name: 'นมจีดเมจิ', price: 12 },
      { name: 'นมจีดเมจิช็อคโกแลต', price: 12 }
    ],
    clothing: [
      { name: 'โออิชิ', price: 10 },
      { name: 'เป๊ปซี่', price: 10 }
    ],
   
  };

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.category = params.get('category') || '';
      if (this.category && this.allProducts[this.category]) {
        this.products = this.allProducts[this.category];
      }
    });
  }
}
