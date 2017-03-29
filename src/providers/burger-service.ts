import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the BurgerService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class BurgerService {

  // private breakfast: Burger[] = [new Burger('breakfast','very tasty and yummy',100,'images/burger/carousel_hungerbusters_mcmuffin_thm.png'),
  //   new Burger('breakfast','yum yum',200,'images/burger/NYCBenedictBagel_thumb_0.png')
  //   ,
  //   new Burger('breakfast','cheesy',300,'images/burger/Pdt_thumbs_GP_B&E_dec15.png'),
  //   new Burger('breakfast','yum yum',400,'images/burger/thumbnail_pdt_Chicken_McMuffin.jpeg')
  //
  // ];
  // private chickenAndFish: Burger[] = [new Burger('chickenAndFish','very tasty and yummy',100,'images/chickenAndFish/Bigmac-Chick_Thumb_0.png'),
  //   new Burger('chickenAndFish','yum yum',200,'images/chickenAndFish/ChickenBaconDelxue_thumb.png')
  //   ,
  //   new Burger('chickenAndFish','cheesy',300,'images/chickenAndFish/CrispyChickenClubhouse_thumb_0.png'),
  //   new Burger('chickenAndFish','yum yum',400,'images/chickenAndFish/GrilledChickenClubhouse_thumb_0.jpeg')
  //
  // ];
  // private beef: Burger[] = [new Burger('beef','very tasty and yummy',100,'images/beef/August_MinceBeef_Pdt_thumbnails.png'),
  //   new Burger('beef','yum yum',200,'images/beef/Bigmac-BLT_Thumb_0.png')
  //   ,
  //   new Burger('beef','cheesy',300,'images/beef/theBoss_thumb.png'),
  //   new Burger('beef','yum yum',400,'images/beef/thumbnails_Pdt_Clubhouse_Angus.jpeg')
  //
  // ];

  constructor(public http: Http) {
    console.log('Hello BurgerService Provider');
  }

  // getChickenAndFish(): Burger[]{
  //   return this.chickenAndFish;
  // }
  //
  // getBeef(): Burger[]{
  //   return this.beef;
  // }

}
