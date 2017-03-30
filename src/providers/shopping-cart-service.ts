import { Injectable } from '@angular/core';
import {Http, RequestOptions, Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {MenuItem} from "../models/menuItem";
import {Observable} from "rxjs";

/*
  Generated class for the ShoppingCartService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ShoppingCartService {

  private wishList: MenuItem[] = [];
  private orderList: number[] = [];
  private totalPrize: number = 0;
  restaurantApiUrl = 'http://www.restaurant.com';

  constructor(public http: Http) {
    console.log('Hello ShoppingCartService Provider');
  }

  addToWishList(menuItem: MenuItem){
    this.wishList.push(menuItem);
    this.orderList.push(menuItem.id);
    this.totalPrize = this.totalPrize + menuItem.unitPrice;
  }

  removeFromWishList(menuItem: MenuItem){
    // this.wishList
    this.totalPrize = this.totalPrize - menuItem.unitPrice;
  }

  getWishList(): MenuItem[]{
    return this.wishList;
  }

  getPrice():number{
    return this.totalPrize;
  }

  placeOrder(): Observable<MenuItem[]>{
    let obj = {"order":this.orderList, "price": this.totalPrize};
    let body = JSON.stringify(obj);
    let headers = new Headers({'Content-Type': 'application/json'});
    let options = new RequestOptions({headers: headers});
    console.log(body);
    return this.http.post(`${this.restaurantApiUrl}/orderPlace`, body, options)
      .catch(this.handleError);

  }

  handleError(error) {
    console.error(error);
    return Observable.throw(error.json().error || 'Server error');
  }





}
