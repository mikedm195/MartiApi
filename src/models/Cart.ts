import { Model } from "./Model";
import { Product } from "./Product";

export class Cart extends Model
{

  user_id: number;
  product_id: number;
  quantity: number;
  size: string;
  product: Product;

  constructor(user_id: number, product_id: number, quantity: number, size: string)
  {
    super();
    this.user_id = user_id;
    this.product_id = product_id;
    this.quantity = quantity;    
    this.size = size;
  }

  export()
  {
    return {
      user_id: this.user_id,
      product_id: this.product_id,
      product: this.product,
      quantity: this.quantity,      
      size: this.size,
    };
  }
}
