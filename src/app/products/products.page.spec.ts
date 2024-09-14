import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.css']
})
export class ProductsPage implements OnInit {
  category: string = '';
  products: any[] = [];

  allProducts = {
    electronics: [
      { name: 'โทรศัพท์', price: 5000 },
      { name: 'แล็ปท็อป', price: 15000 }
    ],
    clothing: [
      { name: 'เสื้อ', price: 300 },
      { name: 'กางเกง', price: 700 }
    ],
    home: [
      { name: 'โต๊ะ', price: 8000 },
      { name: 'เก้าอี้', price: 2000 }
    ]
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
