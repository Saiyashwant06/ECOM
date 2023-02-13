import { Component, OnInit } from '@angular/core';
import { SalesService } from 'src/app/Service/sales.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ProfileComponent } from '../profile/profile.component';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
products:any
item:any
ID:any

showSpinner = false;
  constructor(private ser:SalesService, private route :Router,private dia:MatDialog) { }

  ngOnInit(): void { 
    this.showSpinner = true;
    setTimeout(()=>{this.ser.getproduct().subscribe(e=>{this.products=e})},0)
    this.showSpinner= false;
    
  }
  purchase(){
    this.route.navigate(['purchase'])
  }
  
  stock(){
    this.route.navigate(['stock'])
  }
  OnPro(){
    this.dia.open(ProfileComponent,{
      width:"500px",
      height:"710px"
    })
    this.ser.getprofile(this.ID).subscribe(e=>console.log(e));
  }
  logout(){
    this.route.navigate([''])
  }



  }




