type User = {
  id: number;
  name: string;
  email: string;
};

let user1: User = {
  id: 1,
  name: "Alice",
  email: "alice@test.com",
};

let user2: User = {
  id: 2,
  name: "Bob",
  email: "bob@test.com",
};

type CountryCode = {
  [key: string]: string;
};

const countryCodes: CountryCode = {
  Korea: "KR",
  UnitedStates: "US",
  Canada: "CA",
  UnitedKingdom: "UK",
  Australia: "AU",
  Germany: "DE",
};
