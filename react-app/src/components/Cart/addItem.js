// import React, { useState } from "react";
// import { useDispatch } from "react-redux";
// import { thunkAddCartItem } from "../../store/cart";
// import { useParams } from "react-router-dom";

// const AddCartItem = () => {
//   const dispatch = useDispatch();
//   const { cakeId } = useParams();
//   const [size, setSize] = useState("");
//   const [color, setColor] = useState("");
//   const [glutenFree, setGlutenFree] = useState("");
//   const [flavor, setFlavor] = useState("");
//   const [cakeCharacter, setCakeCharacter] = useState("");
//   const [foodAllergens, setFoodAllergens] = useState("");

//   const colors = [
//     "As Shown",
//     "Pink",
//     "Blue",
//     "Purple",
//     "Yellow",
//     "Green",
//     "White",
//     "Other",
//   ];
//   const flavors = [
//     "Vanilla",
//     "Chocolate",
//     "Oreo",
//     "Lemon",
//     "Strawberry",
//     "Pistachio",
//   ];
  
//   const sizes = [
//   "Small",
//   "Medium",
//   "Large"
// ];

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     const formData = {
//       size,
//       color,
//       glutenFree,
//       flavor,
//       cakeCharacter,
//       foodAllergens,
//     };

//     dispatch(thunkAddCartItem(cakeId, formData));
//   };

//   return (
//     <div>
//       <h1>Customize your cake here</h1>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Enter cake character
//           <input
//             type="text"
//             value={cakeCharacter}
//             onChange={(e) => setCakeCharacter(e.target.value)}
//           />
//         </label>
//      <label>
//   Size
//   <select value={size} onChange={(e) => setSize(e.target.value)}>
//     {sizes.map((size) => (
//       <option key={size} value={size}>
//         {size}
//       </option>
//     ))}
//   </select>
// </label>

//         <label>
//           Flavor
//           <select value={flavor} onChange={(e) => setFlavor(e.target.value)}>
//             {flavors.map((flavor) => (
//               <option key={flavor} value={flavor}>
//                 {flavor}
//               </option>
//             ))}
//           </select>
//         </label>
//         <fieldset>
//           <div>
//             <input
//               type="radio"
//               value="Regular"
//               checked={glutenFree === "Regular"}
//               onChange={(e) => setGlutenFree(e.target.value)}
//             />
//             <label>Regular</label>
//           </div>
//           <div>
//             <input
//               type="radio"
//               value="Gluten-Free"
//               checked={glutenFree === "Gluten-Free"}
//               onChange={(e) => setGlutenFree(e.target.value)}
//             />
//             <label>Gluten Free</label>
//           </div>
//         </fieldset>
//         <label>
//           Color
//           <select value={color} onChange={(e) => setColor(e.target.value)}>
//             {colors.map((color) => (
//               <option key={color} value={color}>
//                 {color}
//               </option>
//             ))}
//           </select>
//         </label>
//         <label>
//           Food Allergens
//           <input
//             type="text"
//             value={foodAllergens}
//             onChange={(e) => setFoodAllergens(e.target.value)}
//           />
//         </label>
//         <button type="submit">Add to Cart</button>
//       </form>
//     </div>
//   );
// };

// export default AddCartItem;


import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { thunkAddCartItem } from '../../store/cart';

const AddCartItem = ({ cakeId }) => {
  const dispatch = useDispatch();
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [flavor, setFlavor] = useState('');
  const [cakeCharacter, setCakeCharacter] = useState('');
  const [glutenFree, setGlutenFree] = useState(false);
  const [foodAllergens, setFoodAllergens] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      size,
      color,
      flavor,
      cakeCharacter,
      glutenFree,
      foodAllergens,
    };

    dispatch(thunkAddCartItem(cakeId, formData));

    // Reset form fields after dispatching the action
    setSize('');
    setColor('');
    setFlavor('');
    setCakeCharacter('');
    setGlutenFree('');
    setFoodAllergens('');
  };

  return (
    <form onSubmit={handleSubmit}>
      {/* Form fields */}
      <label>
        Size:
        <input type="text" value={size} onChange={(e) => setSize(e.target.value)} />
      </label>
      <label>
        Color:
        <input type="text" value={color} onChange={(e) => setColor(e.target.value)} />
      </label>
      <label>
        Flavor:
        <input type="text" value={flavor} onChange={(e) => setFlavor(e.target.value)} />
      </label>
      <label>
        Cake Character:
        <input
          type="text"
          value={cakeCharacter}
          onChange={(e) => setCakeCharacter(e.target.value)}
        />
      </label>
      <label>
        Gluten Free:
        <input
          type="text"
          checked={glutenFree}
          onChange={(e) => setGlutenFree(e.target.checked)}
        />
      </label>
      <label>
        Food Allergens:
        <input
          type="text"
          value={foodAllergens}
          onChange={(e) => setFoodAllergens(e.target.value)}
        />
      </label>

      <button type="submit">Add to Cart</button>
    </form>
  );
};

export default AddCartItem;
