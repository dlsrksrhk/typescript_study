//오버로드 시그니처
function func(a: number): void;
function func(a: number, b: number): void;

//구현 시그니처
function func(a: number, b?: number) {
  if (b !== undefined) {
    console.log(`a: ${a}, b: ${b}`);
  } else {
    console.log(`a: ${a}`);
  }
}

func(10); // a: 10
func(10, 20); // a: 10, b: 20
