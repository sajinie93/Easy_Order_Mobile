import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {MenuItem} from "../models/menuItem";

@Injectable()
export class MenuItemService {

  private data:any;
  private menuItems:MenuItem[];
  public selectedItems: MenuItem[];

  constructor(public http: Http) {
    console.log('Hello MenuItemService Provider');
  }

  loadMenuItems(){
    var body = this.http.get('http://192.168.8.100:3000/menuItems')
      .map(res => {
        console.log('inside loadMenuItems function');
        console.log('rec', res);
        return res.json()
      });
     this.data = body.subscribe(menuItems =>{
       // console.log(categories);
       this.data=menuItems;
       this.menuItems = this.data.menuItems;
     });

     this.menuItems = this.data.menuItems;
  }


  fetchData(category: string): MenuItem[]{
    this.http.get('http://192.168.8.100:3000/menuItems')
      .map(res => {
        console.log('inside loadMenuItems function');
        console.log('rec', res);
        return res.json()
      }).subscribe(menuItems =>{
      console.log('inside inside loadMenuItems function');
      this.data=menuItems;
      this.menuItems = this.data.menuItems;
    });

    return this.menuItems;

  }

  fetchDataTest(category: string){
    return this.http.get('http://192.168.8.100:3000/menuItems')
      .map(res => {
        console.log('inside loadMenuItems function');
        console.log('rec', res);
        return res.json()
      });
  }

}
