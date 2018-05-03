import { Photo } from "../../../models/Photo";
import { Mapper } from "./Mapper";

export class PhotoMapper extends Mapper<Photo>
{
  transform(query): Photo
  {
    var data = new Photo(query.photo_id, query.product_id, query.color_id, query.photo);
    return data;
  }
}
