import {Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CategoryService} from "../../providers/category-service";
import {Category} from "../../models/category";


@Component({
  selector: 'page-category',
  templateUrl: 'category.html'

})

export class CategoryPage {

  items: Category[];

  // set default category number to 2
  select: 2;


  constructor(public navCtrl: NavController, public navParams: NavParams, private categoryService: CategoryService) {
    //fetch categories from  category service and assign them to the item array
    this.items = categoryService.getCategories();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');
  }


}
