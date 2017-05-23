import {Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MenuItemService} from "../../providers/menu-item-service";
import {ShoppingCartService} from "../../providers/shopping-cart-service";
import {MenuItem} from "../../models/menuItem";
import {DomSanitizer } from '@angular/platform-browser';
// import {isUndefined} from "ionic-angular/umd/util/util";
// import {DomSanitizationService} from '@angular/platform-browser/src/security/dom_sanitization_service';

@Component({
  selector: 'page-menu-item',
  templateUrl: 'menu-item.html'
})
export class MenuItemPage implements OnChanges, OnInit, DoCheck     {


  // initialize the category
  @Input() category :string="Burger";
  items: MenuItem[];
  data: any;
  photo: any;
  str: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuItemService: MenuItemService, private shoppingCartService: ShoppingCartService, private sanitizer:DomSanitizer) {
    // this.items = this.menuItemService.fetchData(this.category);

    console.log('constructor of item page');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuItemPage');
  }

  getImage (image) {
    this.photo = this.sanitizer.bypassSecurityTrustUrl(`url(${image})`);
    this.str = 'sajinie';
    return this.sanitizer.bypassSecurityTrustUrl(`url(${image})`);
  }

  //calls when the category is changed
  ngOnChanges(): void {
    //fetch the menu items of the particular category soon after it is required
    // if (this.category == isUndefined){
    //   console.log('this.category:',this.category);
    // }

    // onwaiting(this.category);

    console.log('this.category:',this.category);
    console.log('before onChanges');
    this.menuItemService.fetchDataTest(this.category).subscribe(menuItems =>{
      console.log(menuItems);
      this.data=menuItems;
      this.items = this.data.menuItems;
    });
    // this.items = this.menuItemService.fetchData(this.category);
    console.log('after onChanges');
    console.log(this.items);
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
