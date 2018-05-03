import { Category } from "../../../models/Category";
import { Mapper } from "./Mapper";

export class CategoryMapper extends Mapper<Category>
{
  transform(query): Category
  {
    var data = new Category(query.category_id, query.name, query.description);
    return data;
  }
}
