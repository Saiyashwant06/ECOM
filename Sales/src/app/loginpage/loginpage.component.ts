import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SalesService } from '../Service/sales.service';
import { NgxSpinnerService } from 'ngx-spinner/public_api';

@Component({
  selector: 'app-loginpage',
  templateUrl: './loginpage.component.html',
  styleUrls: ['./loginpage.component.css']
})
export class LoginpageComponent implements OnInit {
  Username:any
  Password:any
  constructor(private route : Router, private ser:SalesService, private spin: NgxSpinnerService) { }

  ngOnInit(): void {
}

  login(){
    console.log(this.Username);
    console.log(this.Password);
    this.spin.show();
    this.ser.getdetail(this.Username,this.Password).subscribe(re=>{console.log(re);
      setTimeout(()=>{
        if(re=="A")
            {
              this.route.navigate(['Authorizer'])  
            }
            else if(re="D"){
              this.route.navigate(['product'])
            }
            else if(re="AD"){
              this.route.navigate(['Admin'])
            }
            else if(re="W"){
              this.route.navigate(['Warehouse'])
            }
            this.spin.hide();
       },3000);          
  });
}}

