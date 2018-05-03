import { Model } from "./Model";

export class Photo extends Model
{

  id: number;
  product_id: number;
  color_id: number;
  photo: string;  

  constructor(id: number, product_id: number, color_id: number, photo: string)
  {
    super();
    this.id = id;
    this.product_id = product_id;
    this.color_id = color_id;
    this.photo = photo;  
  }

  export()
  {
    return {
      photo_id: this.id,
      product_id: this.product_id,
      color_id: this.color_id,
      photo: this.photo,      
    };
  }
}
