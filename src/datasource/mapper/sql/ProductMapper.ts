import { Product } from "../../../models/Product";
import { Mapper } from "./Mapper";

export class ProductMapper extends Mapper<Product>
{
  transform(query): Product
  {        
    var data = new Product(query.product_id, query.category_id, query.name, query.photo, query.video, query.price, query.color, query.age);        
    return data;
  }
}
