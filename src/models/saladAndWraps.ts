import {MenuItem} from "./menuItem";

export class SaladAndWraps extends  MenuItem{
  constructor(public id: number,public title: string, public description: string, public unitPrice: number,public  imagePath: string){
    super( id, title,description,unitPrice , imagePath);
  }
}
