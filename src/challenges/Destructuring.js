
const animals = [
  {
    name: "cat",
    sound: "meow",
    feedingRequirements: {
      food: 2,
      water: 3
    }
  },
  {
    name: "dog", 
    sound: "woof"
  }
];

function useAnimals(animal) {
  return [
    animal.name,
    function () {
      console.log(animal.sound);
    }
  ]
}

const cars = [
  {
    model: "Honda Civic",
    colorsByPopularity: ["black, silver"],
    speedStats: {
      topSpeed: 140,
      zeroToSixty: 8.5
    }
  },
  {
    model: "Tesla Model 3",
    colorsByPopularity: ["red", "white"],
    speedStats: {
      topSpeed: 150,
      zeroToSixty: 3.2
    }
  }
];

// export default animals;
export default cars;
export {useAnimals};