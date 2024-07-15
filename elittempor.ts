interface MyObject {
  foo: string;
  bar: number;
  [key: string]: any;
}

const obj: MyObject = { foo: 'hello', bar: 123, baz: 'world' };

const keys = ObjectEntries(obj); // ['foo', 'bar', 'baz']
