import { Model } from "./Model";

export class Product extends Model
{

  id: number;
  category_id: number;
  name: string;
  photo: string;
  video: string;
  price: number;
  color: string;
  age: string;

  constructor(id: number, category_id: number, name: string, photo: string, video: string, price: number, color: string, age: string)
  {
    super();
    this.id = id;
    this.category_id = category_id;
    this.name = name;
    this.photo = photo;
    this.video = video;
    this.price = price;
    this.color = color;
    this.age = age;
  }

  export()
  {
    return {
      product_id: this.id,
      category_id: this.category_id,
      name: this.name,
      photo: this.photo,
      video: this.video,
      price: this.price,      
      color: this.color,
      age: this.age
    };
  }
}
