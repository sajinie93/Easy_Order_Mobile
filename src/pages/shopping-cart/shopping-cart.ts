import {Component, DoCheck, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ShoppingCartService} from "../../providers/shopping-cart-service";
import {MenuItem} from "../../models/menuItem";

@Component({
  selector: 'page-shopping-cart',
  templateUrl: 'shopping-cart.html'
})
export class ShoppingCartPage implements OnInit, DoCheck, OnChanges{

  //initialize shopping list and total price
  shoppingList: MenuItem[] =[];
  private totalPrize: number=0;

  constructor(public navCtrl: NavController, public navParams: NavParams, private shoppingCartService: ShoppingCartService) {}

  ionViewDidLoad() {
    // console.log('ionViewDidLoad ShoppingCartPage');
  }

  ngOnInit(): void {
    // console.log("wish list is updated in shopping cart");
  }

  //update the shopping list and the total price in each checking
  ngDoCheck(): void {
    console.log("docheck in shopping cart");
    this.shoppingList = this.shoppingCartService.getWishList();
    this.totalPrize = this.shoppingCartService.getPrice();
  }

  ngOnChanges(changes: SimpleChanges): void {
    // console.log("onchanges in shopping cart");

  }

  //remove the items from wish-list
  removeFromWishList(item: MenuItem):void{
    this.shoppingCartService.removeFromWishList(item);
    console.log('remove from list');
  }

  //calling the shopping cart service to place the order
  placeOrder(){
    this.shoppingCartService.placeOrder();
  }


}
