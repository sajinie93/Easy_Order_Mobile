import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ShoppingCartService} from "../../providers/shopping-cart-service";
import {MenuItem} from "../../models/menuItem";

/*
  Generated class for the ShoppingCart page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-shopping-cart',
  templateUrl: 'shopping-cart.html'
})
export class ShoppingCartPage implements OnInit, DoCheck, OnChanges{

  shoppingList: MenuItem[] =[];
  private totalPrize: number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private shoppingCartService: ShoppingCartService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ShoppingCartPage');
  }

  ngOnInit(): void {
    console.log("wish list is updated in shopping cart");
  }

  ngDoCheck(): void {
    console.log("docheck in shopping cart");
    this.shoppingList = this.shoppingCartService.getWishList();
    this.totalPrize = this.shoppingCartService.getPrice();
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("onchanges in shopping cart");

  }

  removeFromWishList():void{
    console.log('remove from list');
  }

  placeOrder(){
    this.shoppingCartService.placeOrder();
  }

}
