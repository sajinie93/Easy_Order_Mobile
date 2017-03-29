import {Component, DoCheck, Input, OnChanges, OnInit} from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {MenuItemService} from "../../providers/menu-item-service";


@Component({
  selector: 'page-menu-item',
  templateUrl: 'menu-item.html'
})
export class MenuItemPage implements OnChanges, OnInit, DoCheck{


  @Input() category :number = 2;
  items=[];

  constructor(public navCtrl: NavController, public navParams: NavParams, private menuItemService: MenuItemService) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenuItemPage');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
    console.log(this.category);
    this.items = this.menuItemService.fetchData(this.category);
    console.log(this.items);
  }

  ngDoCheck(): void {
    console.log('doCheck');
  }
  ngOnInit(): void {
    console.log('onInit');
  }

  addToCart(item: any){

  }






}
