import {MenuItem} from "./menuItem";

export class Burger extends  MenuItem{
  constructor(public id: number,public title: string, public description: string, public unitPrice: number,public  imagePath: string, public categoryId: number){
    super( id, title,description,unitPrice , imagePath,categoryId);
  }
}
