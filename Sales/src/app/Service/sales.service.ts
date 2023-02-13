import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class SalesService {

  constructor(private http:HttpClient) { }

  getdetail(Username:any,Password:any){
    return this.http.get(`https://localhost:44302/api/User/UserLogin/${Username}/${Password}`)
  }  

  getprofile(ID:any){
    return this.http.get(`https://localhost:44302/api/User/GetProfile/${ID}`)
  }
  getproduct(){
    return this.http.get(`https://localhost:44302/api/UserController/GetProducts`)
  }
  }

