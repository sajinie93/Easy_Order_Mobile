import { Component } from '@angular/core';

import { CategoryPage } from '../category/category';
import { AboutPage } from '../about/about';
// import { ContactPage } from '../contact/contact';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = CategoryPage;
  tab2Root: any = AboutPage;
  // tab3Root: any = ContactPage;

  constructor() {

  }
}
