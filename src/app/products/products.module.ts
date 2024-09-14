import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsPage } from './products.page';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [ProductsPage],
  imports: [
    CommonModule,
    ProductsRoutingModule
  ]
})
export class ProductsModule {}
