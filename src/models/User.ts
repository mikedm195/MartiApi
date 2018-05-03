import { Model } from "./Model";

export class User extends Model
{

  id: number;  
  email: string;
  password: string;
  name: string;
  last_name: string;
  gender: string;
  height: number;
  weight: number;
  address: string;
  rol: string;

  constructor(id: number, email: string, password: string, name: string, last_name: string, gender: string,
    height: number, weight: number, address: string, rol: string)
  {
    super();
    this.id = id;
    this.email = email;
    this.password = password;
    this.name = name;
    this.last_name = last_name;
    this.gender = gender;
    this.height = height;
    this.weight = weight;
    this.address = address;
    this.rol = rol;
  }


  export()
  {
    return {
      user_id: this.id,
      email: this.email,      
      name: this.name,
      last_name: this.last_name,
      gender: this.gender,
      height: this.height,
      weight: this.weight,
      address: this.address,
      rol: this.rol,
    };
  }
}
