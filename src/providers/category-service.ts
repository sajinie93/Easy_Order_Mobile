import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs";
import {User} from "../models/users";


@Injectable()
export class CategoryService {

  restaurantApiUrl = 'http://192.168.8.100:3000';
  github = 'http://api.github.com';

  constructor(public http: Http) {

  }

  loadCategories(){
      return this.http.get('http://192.168.8.100:3000/categories')
        .map(res => {
          console.log('inside loadCategories function');
          console.log('rec', res);
         return res.json()
        });
  }

  loads(): Observable<User[]> {
    console.log('inside the load function');
    return this.http.get(`${this.github}/users`)
      .map(res => {
        return <User[]>res.json()
      });
  }

}
