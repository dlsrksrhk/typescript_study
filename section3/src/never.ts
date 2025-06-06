let a: never;

//never 타입은 모든 타입들의 서브타입이므로 never 이외의 모든 타입의 부분집합임
//따라서 never 타입은 다른 모든 타입 변수에 할당 가능
let b: number = a;
let c: string = a;
let d: boolean = a;

let e: never = a; //never타입 변수에 never 타입 이외에 모든 타입은 할당 불가능
