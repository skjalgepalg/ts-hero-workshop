export interface Box<A> {
  value: A;
}
export class MyBox<A> {
  constructor(private value: A) {}

  get(): A {
    return this.value;
  }

  map<B>(fn: (a: A) => B): MyBox<B> {
    throw new Error();
  }

  flatMap<B>(
    fn: (a: A) => MyBox<B>
  ): MyBox<B> {
    throw new Error();
  }

  public static combine<A, B, C>(
    fn: (a: A, b: B) => C
  ): (
    a: MyBox<A>,
    b: MyBox<B>
  ) => MyBox<C> {
    throw new Error();
  }
}
