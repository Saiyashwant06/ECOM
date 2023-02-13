import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DitributorRoutingModule } from './ditributor-routing.module';
import { MaterialModule } from '../material ui/mat/mat.module';
import { ProfileComponent } from './profile/profile.component';
import { ProductsComponent } from './products/products.component';
import { PurchaseorderComponent } from './purchaseorder/purchaseorder.component';
import { StockComponent } from './stock/stock.component';


@NgModule({
  declarations: [
    ProfileComponent,
    ProductsComponent,
    PurchaseorderComponent,
    StockComponent
  ],
  imports: [
    CommonModule,
    DitributorRoutingModule,MaterialModule
  ]
})
export class DitributorModule { }
