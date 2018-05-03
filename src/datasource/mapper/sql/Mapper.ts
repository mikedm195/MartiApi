export abstract class Mapper<T>
{
  transformList(query): T[]
  {
    if (!query) return [];
    var data = [];
    for (var i = 0; i < query.length; i++) {
      data.push(this.transform(query[i]));
    }
    return data;
  }

  abstract transform(query): T;
}
