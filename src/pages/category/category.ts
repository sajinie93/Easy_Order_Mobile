import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CategoryService} from "../../providers/category-service";
import {Category} from "../../models/category";
import {BurgerPage} from "../burger/burger";


@Component({
  selector: 'page-category',
  templateUrl: 'category.html'

})


export class CategoryPage {

  items: Category[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private categoryService: CategoryService) {
    this.items = categoryService.getCategories();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }

  // itemTapped(item){
  //   alert(item.title);
  // }

  itemTapped(item) {
    this.navCtrl.push(BurgerPage, {
      item: item
    });
  }

}
