import {Component, ViewChild} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CategoryService} from "../../providers/category-service";
import {Category} from "../../models/category";


@Component({
  selector: 'page-category',
  templateUrl: 'category.html'

})

export class CategoryPage {

  items: Category[];

  select: 2;

  @ViewChild('myNav') nav: NavController

  constructor(public navCtrl: NavController, public navParams: NavParams, private categoryService: CategoryService) {
    this.items = categoryService.getCategories();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }


}
