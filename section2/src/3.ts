let user: {
  name?: string;
  age: number;
};

user = {
  name: undefined,
  age: 25,
};

let config: {
  readonly apiUrl: string;
  timeout?: number;
};

config = {
  apiUrl: "https://api.example.com",
  timeout: 5000,
};

//읽기 전용 속성이므로 'apiUrl'에 할당할 수 없습니다.ts(2540)
// config.apiUrl = "https://api.newexample.com";
