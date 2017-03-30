import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Burger} from "../models/burger";
import {Sides} from "../models/sides";
import {Dessert} from "../models/Dessert";
import {Drinks} from "../models/drinks";
import {SaladAndWraps} from "../models/saladAndWraps";

@Injectable()
export class MenuItemService {

  private breakfast: any[] = [new Burger(1,'breakfast','very tasty and yummy',100,'images/burger/breakfast/carousel_hungerbusters_mcmuffin_thm.png',1),
    new Burger(2,'breakfast','yum yum',200,'images/burger/breakfast/NYCBenedictBagel_thumb_0.png',1)
    ,
    new Burger(3,'breakfast','cheesy',300,'images/burger/breakfast/Pdt_thumbs_GP_B&E_dec15.png',1),
    new Burger(4,'breakfast','yum yum',400,'images/burger/breakfast/thumbnail_pdt_Chicken_McMuffin.png',1)
    ,
    new Burger(5,'breakfast','cheesy',300,'images/burger/breakfast/Pdt_thumbs_GP_B&E_dec15.png',1),
    new Burger(5,'breakfast','yum yum',400,'images/burger/breakfast/thumbnail_pdt_Chicken_McMuffin.png',1)
    ,
    new Burger(7,'breakfast','cheesy',300,'images/burger/breakfast/Pdt_thumbs_GP_B&E_dec15.png',1),
    new Burger(8,'breakfast','yum yum',400,'images/burger/breakfast/thumbnail_pdt_Chicken_McMuffin.png',1)

  ];
  private chickenAndFish: Burger[] = [new Burger(1,'chickenAndFish','very tasty and yummy',100,'images/burger/chickenAndFish/Bigmac-Chick_Thumb_0.png',3),
    new Burger(2,'chickenAndFish','yum yum',200,'images/burger/chickenAndFish/ChickenBaconDelxue_thumb.png',3)
    ,
    new Burger(3,'chickenAndFish','cheesy',300,'images/burger/chickenAndFish/CrispyChickenClubhouse_thumb_0.png',3),
    new Burger(4,'chickenAndFish','yum yum',400,'images/burger/chickenAndFish/GrilledChickenClubhouse_thumb_0.png',3)

  ];
  private beef: Burger[] = [new Burger(1,'beef','very tasty and yummy',100,'images/burger/beef/August_MinceBeef_Pdt_thumbnails.png',2),
    new Burger(2,'beef','yum yum',200,'images/burger/beef/Bigmac-BLT_Thumb_0.png',2)
    ,
    new Burger(3,'beef','cheesy',300,'images/burger/beef/theBoss_thumb.png',2),
    new Burger(4,'beef','yum yum',400,'images/burger/beef/thumbnails_Pdt_Clubhouse_Angus.png',2)

  ];
  private saladAndWraps: SaladAndWraps[] = [new SaladAndWraps(1,'saladAndWraps','very tasty and yummy',100,'images/saladAndWraps/McWrapChicCaeser_pdt_thumbnail.png',4),
    new SaladAndWraps(2,'saladAndWraps','yum yum',200,'images/saladAndWraps/McWrapGrilledAioli_pdt_thumbnail.png',4)
    ,
    new SaladAndWraps(3,'saladAndWraps','cheesy',300,'images/saladAndWraps/thumbs_grilled_chicken_salad_nz.png',4),
    new SaladAndWraps(4,'saladAndWraps','yum yum',400,'images/saladAndWraps/thumbs_snack_wrap_crispy.png',4)

  ];
  private sides: Sides[] = [new Sides(1,'sides','very tasty and yummy',100,'images/sides/LoadedFries_cheeseonion.png',5),
    new Sides(2,'sides','yum yum',200,'images/sides/LoadedFriesThumbnail.png',5)
    ,
    new Sides(3,'sides','cheesy',300,'images/sides/SweetChilli_Fries_thumbnail_pdt.png',5),
    new Sides(4,'sides','yum yum',400,'images/sides/thumbs_balsamic_dressing.png',5)

  ];
  private desserts: Dessert[] = [new Dessert(1,'desserts','very tasty and yummy',100,'images/desserts/choctop_thumbnail_pdt.png',7),
    new Dessert(2,'desserts','yum yum',200,'images/desserts/thumbs_apple_pie.png',7)
    ,
    new Dessert(3,'desserts','cheesy',300,'images/desserts/thumbs_caramel_sundae.png',7),
    new Dessert(4,'desserts','yum yum',400,'images/desserts/thumbs_plain_sundae.png',7)

  ];
  private drinks: Drinks[] = [new Drinks(1,'drinks','very tasty and yummy',100,'images/drinks/thumbs_calci_yum.png',6),
    new Drinks(2,'drinks','yum yum',200,'images/drinks/thumbs_coke_zero.png',6)
    ,
    new Drinks(3,'drinks','cheesy',300,'images/drinks/thumbs_fanta.png',6),
    new Drinks(4,'drinks','yum yum',400,'images/drinks/thumbs_lime_shake.png',6)

  ];


  constructor(public http: Http) {
    console.log('Hello MenuItemService Provider');
  }

  getChickenAndFish(): Burger[]{
    return this.chickenAndFish;
  }
  getBeef(): Burger[]{
    return this.beef;
  }
  getSides(): Sides[]{
    return this.sides;
  }
  getSalad(): SaladAndWraps[]{
    return this.saladAndWraps;
  }
  getDessert(): Dessert[]{
    return this.desserts;
  }
  getDrink(): Drinks[]{
    return this.drinks;
  }
  getBreakfast(): any[]{
    return this.breakfast;
  }
  fetchData(category: number): any[]{
    if(category == 5){
      return this.sides;
    }
    if(category == 4){
      return this.saladAndWraps;
    }
    if(category == 6){
      return this.drinks;
    }
    if(category == 7){
      return this.desserts;
    }
    if(category == 3){
      return this.chickenAndFish;
    }
    if(category == 1){
      return this.breakfast;
    }
    if(category == 2){
      return this.beef;
    }else {
      console.log('category does not exist');
    }

  }

}
