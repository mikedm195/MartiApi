import { Model } from "./Model";

export class Category extends Model
{

  id: number;
  name: string;
  description: string;

  constructor(id: number, name: string, description: string)
  {
    super();
    this.id = id;
    this.name = name;
    this.description = description;
  }

  export()
  {
    return {
      category_id: this.id,
      name: this.name,
      description: this.description,
    };
  }
}
