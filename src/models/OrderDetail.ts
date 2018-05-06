import { Model } from "./Model";

export class OrderDetail extends Model
{

  id: number
  product_id: number;
  quantity: number;  
  size: string;

  constructor(id: number, product_id: number, quantity: number, size: string)
  {
    super();
    this.id = id;
    this.product_id = product_id;
    this.quantity = quantity;    
    this.size = size;
  }

  export()
  {
    return {
      orderDetail_id: this.id,
      product_id: this.product_id,
      quantity: this.quantity,      
      size: this.size,
    };
  }
}
