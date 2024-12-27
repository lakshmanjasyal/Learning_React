import animals, { useAnimals } from "./data";
// console.log(animals);

const [cat, dog] = animals;
const [animal, makingSound] = useAnimals(cat);
console.log(animal);
makingSound();
// console.log(cat);

// const {
//   name,
//   sound,
//   feedingRequirements: { food, water },
// } = cat;
// console.log(food);

// const { name, sound } = cat;
// console.log(sound);

// const { name = "Fluffy", sound = "Purr" } = cat;
// console.log(name);
// console.log(sound);

// // CHALLENGE: uncomment the code below and see the car stats rendered
// import React from "react";
// import ReactDOM from "react-dom";

// import cars from "./practice";

// function create() {}
// ReactDOM.render(
//   <table>
//     <tr>
//       <th>Brand</th>
//       <th>Top Speed</th>
//     </tr>
//     <tr>
//       <td>{tesla.model}</td>
//       <td>{teslaTopSpeed}</td>
//       <td>{teslaTopColour}</td>
//     </tr>
//     <tr>
//       <td>{honda.model}</td>
//       <td>{hondaTopSpeed}</td>
//       <td>{hondaTopColour}</td>
//     </tr>
//   </table>,
//   document.getElementById("root")
// );
