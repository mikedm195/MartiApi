import { Model } from "./Model";

export class OrderDetail extends Model
{

  id: number
  product_id: number;
  quantity: number;
  color: number;
  size: string;

  constructor(id: number, product_id: number, quantity: number, color: number, size: string)
  {
    super();
    this.id = id;
    this.product_id = product_id;
    this.quantity = quantity;
    this.color = color;
    this.size = size;
  }

  export()
  {
    return {
      orderDetail_id: this.id,
      product_id: this.product_id,
      quantity: this.quantity,
      color: this.color,
      size: this.size,
    };
  }
}
