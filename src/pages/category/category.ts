import {Component} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {CategoryService} from "../../providers/category-service";
import {Category} from "../../models/category";

import {  GithubUsers } from '../../providers/github-users';



@Component({
  selector: 'page-category',
  templateUrl: 'category.html'

})

export class CategoryPage {

  data:any;
  items: Category[];

  // set default category number to 2
  select: "Burger";


  constructor(public navCtrl: NavController, public navParams: NavParams, private categoryService: CategoryService, private githubUsers: GithubUsers) {
    //fetch categories from  category service and assign them to the item array
    console.log('inside the category constructor');
      categoryService.loadCategories().subscribe(categories =>{
        console.log(categories);
        this.data=categories;
        this.items = this.data.categories;
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CategoryPage');

  }
}
