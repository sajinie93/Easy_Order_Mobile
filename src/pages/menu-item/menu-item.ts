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


  @Input() category :number=2;
  items=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuItemService: MenuItemService, private shoppingCartService: ShoppingCartService) {
    // this.items = this.menuItemService.fetchData(this.category);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuItemPage');
  }

  ngOnChanges(): void {
    this.items = this.menuItemService.fetchData(this.category);
    // console.log(this.category.isCustomizable);
  }
  ngDoCheck(): void {
    console.log('doCheck in menu item component');
  }

  ngOnInit(): void {
    // this.items = this.menuItemService.fetchData(this.category);
    console.log('onInit in menu item component');
  }

  addToCart(item: MenuItem){
    this.shoppingCartService.addToWishList(item);
  }






}
