import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

import {CategoryPage} from '../pages/category/category';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CategoryService} from "../providers/category-service";
import {AboutPage} from "../pages/about/about";
import {MenuItemService} from "../providers/menu-item-service";
import {MenuItemPage} from "../pages/menu-item/menu-item";
import {ShoppingCartService} from "../providers/shopping-cart-service";
import {ShoppingCartPage} from "../pages/shopping-cart/shopping-cart";
import {GithubUsers} from "../providers/github-users";


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    CategoryPage,
    AboutPage,
    MenuItemPage,
    ShoppingCartPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    CategoryPage,
    AboutPage,
    MenuItemPage,
    ShoppingCartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CategoryService,
    MenuItemService,
    ShoppingCartService,
    GithubUsers,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
