export abstract class Model
{
  static generateId(): number
  {
    return Math.floor(Math.random() * 10000000) + 1
  }
  abstract export();
}
