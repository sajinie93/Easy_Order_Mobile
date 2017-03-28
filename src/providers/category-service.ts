import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Category} from "../models/category";


@Injectable()
export class CategoryService {

  private categories: Category[] = [new Category('burgers','very tasty and yummy', 'images/burger_category.png'),
    new Category('salad','yum yum','images/SaladsWrapsDesktop.png')
    ,
    new Category('burger2','cheesy','images/burger_category.png')
    // ,
    // new Category('burger','yum yum','images/Tandoori_Chicken.jpeg')

  ];

  constructor(public http: Http) {
    console.log('Hello CategoryService Provider');
  }

  getCategories(): Category[]{
    return this.categories;
  }


}
