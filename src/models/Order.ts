import { Model } from "./Model";
import { OrderDetail } from "./OrderDetail";

export class Order extends Model
{

  id: number
  user_id: number;
  seller_id: number;
  date: number;
  details: OrderDetail[];

  constructor(id: number, user_id: number, seller_id: number, date: number, details: OrderDetail[])
  {
    super();
    this.id = id;
    this.user_id = user_id;
    this.seller_id = seller_id;
    this.date = date;
    this.details = details;
  }

  export()
  {
    return {
      order_id: this.id,
      user_id: this.user_id,
      seller_id: this.seller_id,
      date: this.date,
      details: this.details
    };
  }
}
