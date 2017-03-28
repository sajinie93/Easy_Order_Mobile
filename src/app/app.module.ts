import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { TabsPage } from '../pages/tabs/tabs';

import {CategoryPage} from '../pages/category/category';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CategoryService} from "../providers/category-service";
import {AboutPage} from "../pages/about/about";
import {BurgerPage} from "../pages/burger/burger";


@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    CategoryPage,
    AboutPage,
    BurgerPage
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
    BurgerPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CategoryService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
