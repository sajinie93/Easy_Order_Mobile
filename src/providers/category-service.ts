import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Category} from "../models/category";


@Injectable()
export class CategoryService {

  private categories: Category[] = [new Category(1,'Breakfast','very tasty and yummy', 'images/burger_category.png'),
    new Category(2,'Beef','cheesy','images/burger_category.png')
    ,
    new Category(3,'Chicken and Fish','yum yum','images/Tandoori_Chicken.jpeg')
    ,
    new Category(4,'Salad and Wraps','yum yum','images/SaladsWrapsDesktop.png')
    ,
    new Category(5,'Sides','cheesy','images/burger_category.png')
    ,
    new Category(6,'Drinks','yum yum','images/Tandoori_Chicken.jpeg')
    ,
    new Category(7,'Desserts','yum yum','images/Tandoori_Chicken.jpeg')

  ];

  constructor(public http: Http) {
    console.log('Hello CategoryService Provider');
  }

  getCategories(): Category[]{
    return this.categories;
  }


}
