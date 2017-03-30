import {Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MenuItemService} from "../../providers/menu-item-service";
import {ShoppingCartService} from "../../providers/shopping-cart-service";
import {MenuItem} from "../../models/menuItem";


@Component({
  selector: 'page-menu-item',
  templateUrl: 'menu-item.html'
})
export class MenuItemPage implements OnChanges, OnInit, DoCheck     {


  // initialize the category
  @Input() category :number=2;
  items=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuItemService: MenuItemService, private shoppingCartService: ShoppingCartService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuItemPage');
  }

  //calls when the category is changed
  ngOnChanges(): void {
    //fetch the menu items of the particular category soon after it is required
    this.items = this.menuItemService.fetchData(this.category);
  }
  ngDoCheck(): void {
    // console.log('doCheck in menu item component');
  }

  ngOnInit(): void {
    // this.items = this.menuItemService.fetchData(this.category);
    // console.log('onInit in menu item component');
  }

  //add the tapped menu item to the wish-list
  addToCart(item: MenuItem){
    this.shoppingCartService.addToWishList(item);
  }

  itemTapped(item: MenuItem){
    console.log(item + "is tapped");
  }






}
