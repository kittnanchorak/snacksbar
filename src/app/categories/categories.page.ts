import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.page.html',
  styleUrls: ['./categories.page.scss'],
})
export class CategoriesPage {
  constructor(private router: Router) {}

  navigateToProducts(category: string) {
    this.router.navigate(['/products', category]);
  }
}
