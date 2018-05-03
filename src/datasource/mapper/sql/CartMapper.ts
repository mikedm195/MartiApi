import { Cart } from "../../../models/Cart";
import { Mapper } from "./Mapper";

export class CartMapper extends Mapper<Cart>
{
  transform(query): Cart
  {
    var data = new Cart(query.user_id, query.product_id, query.quantity, query.color, query.size);
    return data;
  }
}
