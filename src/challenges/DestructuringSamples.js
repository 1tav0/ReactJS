import React from 'react'
import cars, {useAnimals} from './Destructuring'

const DestructuringSamples = () => {

  // console.log(animals);
  // const [cat, dog] = animals;
  //aka var cat = animals[0];
  // console.log(cat)
  // const { name, sound } = cat;
  // console.log(sound)
  /**TO RENAME THE DATA INSIDE THE DESTRCUTURED OBJECT***/
  // const { name: catName, sound: catSound } = cat;
  // console.log(catSound);
  /***TO REVALUE THE DATA OF THE DESTRUCTURED OBJECT***/
  // - this is used when a value is not specified in the object at the beginning so we do it from here
  // const { name = "fluffy", sound = "Purr" } = cat;
  // console.log(name);
  /***DESTRUCTURING NESTED OBJECTS***/
  // const { name, sound, feedingRequirements } = cat;
  // console.log(feedingRequirements.food);
  /***can also do it like this***/
  // const { name, sound, feedingRequirements: {food, water} } = cat;
  // console.log(food);
  /***HOW TO DESTRUCTURE A FUNCTION***/
  // console.log(useAnimals(cat));
  // const [animal, makeSound] = useAnimals(cat);
  // console.log(animal);
  // makeSound();
  const [honda, tesla] = cars;
  const { speedStats: { topSpeed: hondaTopSpeed } } = honda;
  const { speedStats: { topSpeed: teslaTopSpeed } } = tesla;
  const { colorsByPopularity: [hondaTopColor] } = honda;
  const { colorsByPopularity: [teslaTopColor] } = tesla;
  return (
    <table>
      <tr>
        <th>Brand</th>
        <th>Top Speed</th>
        <th>Top Color</th>
      </tr>
      <tr>
        <td>{tesla.model}</td>
        <td>{teslaTopSpeed}</td>
        <td>{teslaTopColor}</td>
      </tr>
      <tr>
        <td>{honda.model}</td>
        <td>{hondaTopSpeed}</td>
        <td>{hondaTopColor}</td>
      </tr>
    </table>
  )
}

export default DestructuringSamples