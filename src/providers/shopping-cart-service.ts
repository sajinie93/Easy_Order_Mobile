import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {MenuItem} from "../models/menuItem";
import {Observable} from "rxjs";


@Injectable()
export class ShoppingCartService {

  private tableNum:number = 1;
  private wishList: MenuItem[] = [];
  private orderList: string[] = [];
  private totalPrize: number;
  restaurantApiUrl = 'http://192.168.8.100:3000';

  constructor(public http: Http) {
    this.totalPrize = 0;
  }

  addToWishList(menuItem: MenuItem){
    this.wishList.push(menuItem);
    this.orderList.push(menuItem._id);
    this.totalPrize = this.totalPrize + parseInt(menuItem.unit_price);
  }

  removeFromWishList(menuItem: MenuItem){
    this.totalPrize = this.totalPrize - parseInt(menuItem.unit_price);
    this.wishList.splice(this.wishList.indexOf(menuItem), 1);
    this.orderList.splice(this.orderList.indexOf(menuItem._id), 1);
  }

  getWishList(): MenuItem[]{
    return this.wishList;
  }

  getPrice():number{
    return this.totalPrize;
  }

  placeOrder(): Observable<MenuItem[]>{
    let obj = {"order":this.orderList, "price": this.totalPrize, "tableNum": this.tableNum};
    let body = JSON.stringify(obj);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    console.log(body);
    return this.http.post(`${this.restaurantApiUrl}/placeOrder`, body, options)
      .catch(this.handleError);
  }

  handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }

}
