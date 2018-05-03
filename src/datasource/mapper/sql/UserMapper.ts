import { User } from "../../../models/User";
import { Mapper } from "./Mapper";

export class UserMapper extends Mapper<User>
{
  transform(query): User
  {
    var data = new User(query.user_id, query.email, query.password, query.name, query.last_name, 
      query.gender, query.height, query.weight, query.address, query.rol);
    return data;
  }
}
