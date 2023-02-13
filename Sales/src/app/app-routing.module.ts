import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './ditributor/products/products.component';
import { ProfileComponent } from './ditributor/profile/profile.component';
import { PurchaseorderComponent } from './ditributor/purchaseorder/purchaseorder.component';
import { StockComponent } from './ditributor/stock/stock.component';
import { HomepageComponent } from './homepage/homepage.component';
import { LoginpageComponent } from './loginpage/loginpage.component';

const routes: Routes = [{
  path:'',component:HomepageComponent
  },
  {
    path:'login',component:LoginpageComponent
  },
  {
     path: 'Distributor', loadChildren: () => import('./ditributor/ditributor.module').then(m => m.DitributorModule) 
  },
  { path: 'Authorizer', loadChildren: () => import('./authorizer/authorizer.module').then(m => m.AuthorizerModule) },
  { path: 'Warehouse', loadChildren: () => import('./warehouse/warehouse.module').then(m => m.WarehouseModule) },
  { path: 'Admin', loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule) },
  {
    path:'profile',component:ProfileComponent
  },{
    path:'product',component:ProductsComponent
  },{
    path:'purchase',component:PurchaseorderComponent
  },{
    path:'stock',component:StockComponent
  }
 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
