import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthorizerRoutingModule } from './authorizer-routing.module';
import { AuthorizerComponent } from './authorizer.component';


@NgModule({
  declarations: [
    AuthorizerComponent,
  ],
  imports: [
    CommonModule,
    AuthorizerRoutingModule
  ]
})
export class AuthorizerModule { }
