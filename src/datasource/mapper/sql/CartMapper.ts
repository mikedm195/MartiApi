import { Cart } from "../../../models/Cart";
import { Product } from "../../../models/Product";
import { Mapper } from "./Mapper";

export class CartMapper extends Mapper<Cart>
{
  transform(query): Cart
  {
    var product = new Product(
      query.product_id, query.category_id, query.name, query.photo, query.video, query.price, query.color, query.age
    )
    var data = new Cart(query.user_id, query.product_id, query.quantity, query.size);
    data.product = product;
    return data;
  }
}
