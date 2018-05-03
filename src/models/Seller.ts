import { Model } from "./Model";

export class Seller extends Model
{

  id: number;
  name: string;

  constructor(id: number, name: string)
  {
    super();
    this.id = id;
    this.name = name;    
  }

  export()
  {
    return {
      seller_id: this.id,
      name: this.name,    
    };
  }
}
