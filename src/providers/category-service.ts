import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Category} from "../models/category";
import {Observable} from "rxjs";


@Injectable()
export class CategoryService {

  restaurantApiUrl = 'http://www.restaurant.com';

  private categories: Category[] = [new Category(1,'Breakfast','very tasty and yummy',  true),
    new Category(2,'Beef','cheesy',true)
    ,
    new Category(3,'Chicken and Fish','yum yum', true)
    ,
    new Category(4,'Salad and Wraps','yum yum',true)
    ,
    new Category(5,'Sides','cheesy',false)
    ,
    new Category(6,'Drinks','yum yum',false)
    ,
    new Category(7,'Desserts','yum yum',false)

  ];

  constructor(public http: Http) {
    console.log('Hello CategoryService Provider');
  }

  getCategories(): Category[]{
    return this.categories;
  }

  // Load all github users
  load(): Observable<Category[]> {
    return this.http.get(`${this.restaurantApiUrl}/category`)
      .map(res => <Category[]>res.json());
  }


}
