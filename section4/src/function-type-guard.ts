type Dog = {
  name: string;
  bark: () => void;
};

type Cat = {
  name: string;
  meow: () => void;
};

type Pet = Dog | Cat;

function isDog(pet: Pet): pet is Dog {
  return (pet as Dog).bark !== undefined;
}

function isCat(pet: Pet): pet is Cat {
  return (pet as Cat).meow !== undefined;
}

// function handlePet(pet: Pet) {
//   if (pet && "bark" in pet) {
//     console.log(`${pet.name} says Woof!`); //블록 내에서는 Dog 타입으로 좁혀짐
//   } else if (pet && "meow" in pet) {
//     console.log(`${pet.name} says Meow!`); //블록 내에서는 Cat 타입으로 좁혀짐
//   } else {
//     console.log("Unknown pet type");
//   }
// }

function handlePet(pet: Pet) {
  if (isDog(pet)) {
    console.log(`${pet.name} says Woof!`); //블록 내에서는 Dog 타입으로 좁혀짐
  } else if (isCat(pet)) {
    console.log(`${pet.name} says Meow!`); //블록 내에서는 Cat 타입으로 좁혀짐
  } else {
    console.log("Unknown pet type");
  }
}
