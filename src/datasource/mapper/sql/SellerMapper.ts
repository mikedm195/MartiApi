import { Seller } from "../../../models/Seller";
import { Mapper } from "./Mapper";

export class SellerMapper extends Mapper<Seller>
{
  transform(query): Seller
  {
    var data = new Seller(query.seller_id, query.name);
    return data;
  }
}
