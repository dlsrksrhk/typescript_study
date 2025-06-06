let a: any = 1;
let b: unknown = "hello";
let c: undefined = undefined;
let d: never;

a = b;
b = a;

a = c;
c = a;

a = d;
d = a; //'any' 형식은 'never' 형식에 할당할 수 없습니다.ts(2322)
