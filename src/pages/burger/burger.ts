import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {BurgerService} from "../../providers/burger-service";

@Component({
  selector: 'page-burger',
  templateUrl: 'burger.html'
})
export class BurgerPage {

  selectedItem: any;
  items=[];           //dynamically store the menu items fetched from the database

  constructor(public navCtrl: NavController, public navParams: NavParams, private burgerService: BurgerService) {
    this.selectedItem = navParams.get('item');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BurgerPage');
  }

}
