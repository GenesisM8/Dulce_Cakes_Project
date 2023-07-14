import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { thunkAddCartItem } from '../../store/cart';
import './cart.css';

const AddCartItem = ({ cakeId, cake }) => {
  const dispatch = useDispatch();
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [flavor, setFlavor] = useState('');
  const [cakeCharacter, setCakeCharacter] = useState('');
  const [glutenFree, setGlutenFree] = useState(false);
  const [foodAllergens, setFoodAllergens] = useState('');
  const [price, setPrice] = useState(0);
  const [otherColor, setOtherColor] = useState('');

  useEffect(() => {
    if (cake) {
      setPrice(cake.smallPrice);
    }
  }, [cake]);

  const handleSizeChange = (e) => {
    const selectedSize = e.target.value;
    setSize(selectedSize);
    setPrice(getSelectedSizePrice(selectedSize));
  };

  const handleColorChange = (e) => {
    const selectedColor = e.target.value;
    setColor(selectedColor);
  };

  const handleOtherColorChange = (e) => {
    const selectedOtherColor = e.target.value;
    setOtherColor(selectedOtherColor);
  };

  const handleFlavorChange = (e) => {
    const selectedFlavor = e.target.value;
    setFlavor(selectedFlavor);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      size,
      color: color === 'other' ? otherColor : color,
      flavor,
      cakeCharacter,
      glutenFree,
      foodAllergens,
    };

    dispatch(thunkAddCartItem(cakeId, formData));

    setSize('');
    setColor('');
    setFlavor('');
    setCakeCharacter('');
    setGlutenFree(false);
    setFoodAllergens('');
    setPrice(0);
    setOtherColor('');
  };

  const getSelectedSizePrice = (selectedSize) => {
    if (selectedSize === 'small') {
      return cake.smallPrice;
    } else if (selectedSize === 'medium') {
      return cake.mediumPrice;
    } else if (selectedSize === 'large') {
      return cake.largePrice;
    }

    return 0;
  };

  if (!cake) {
    return null;
  }

  const renderCakeCharacterInput = () => {
    if (cake.category === 'letters' && cake.name === 'Single Letter Cake') {
      return (
        <label>
          Choice of letter:
          <input
            type="text"
            value={cakeCharacter}
            onChange={(e) => setCakeCharacter(e.target.value)}
            maxLength={3}
            required
            onInvalid={(e) => e.target.setCustomValidity('Please enter your desired letter.')}
            onInput={(e) => e.target.setCustomValidity('')}
            
          />
        </label>
      );
    } else if (cake.category === 'letters' && cake.name === 'Double Letters Cake'){
      return (
          <label>
          Choice of letters:
          <input
            type="text"
            value={cakeCharacter}
            onChange={(e) => setCakeCharacter(e.target.value)}
            maxLength={2}
            required
            onInvalid={(e) => e.target.setCustomValidity('Please enter your desired letters.')}
            onInput={(e) => e.target.setCustomValidity('')}
          />
        </label>
      )
    }else if (cake.category === 'letters' && cake.name === 'Three letters Cake'){
      return (
          <label>
          Choice of letters:
          <input
            type="text"
            value={cakeCharacter}
            onChange={(e) => setCakeCharacter(e.target.value)}
            maxLength={3}
            required
            onInvalid={(e) => e.target.setCustomValidity('Please enter your desired letters.')}
            onInput={(e) => e.target.setCustomValidity('')}
          />
        </label>
      )
    }
    else if (cake.category === 'numbers') {
      return (
        <label>
          Choice of number:
          <input
            type="text"
            value={cakeCharacter}
            onChange={(e) => setCakeCharacter(e.target.value)}
            maxLength={2}
            required
            onInvalid={(e) => e.target.setCustomValidity('Please enter your desired number.')}
            onInput={(e) => e.target.setCustomValidity('')}
          />
        </label>
      );
    } else {
      return null;
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-container">
        <p>Price: ${price}.00</p>
        <label>
          Size:
          <select value={size} onChange={handleSizeChange} required >
            {/* <option value="">Select Size</option> */}
            <option value="small">Small (8-10 servings)</option>
            <option value="medium">Medium (15-18 servings)</option>
            <option value="large">Large (20-25 servings)</option>
          </select>
        </label>
        <label>
          Color:
          <select value={color} onChange={handleColorChange} required onInvalid={(e) => e.target.setCustomValidity('Please select a color.')}
            onInput={(e) => e.target.setCustomValidity('')}>
            <option value="">Select Color</option>
            <option value="pink">Pink</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="purple">Purple</option>
            <option value="same">As Shown</option>
            <option value="other">Other</option>
          </select>
        </label>
        {color === 'other' && (
          <label>
            Other Color:
            <input type="text" value={otherColor} maxLength={50} onChange={handleOtherColorChange} required onInvalid={(e) => e.target.setCustomValidity('Specify the color.') }
            onInput={(e) => e.target.setCustomValidity('')}/>
          </label>
        )}
        <label>
          Cream Flavor:
          <select value={flavor} onChange={handleFlavorChange} required>
            <option value="">Select Flavor</option>
            <option value="Vanilla">Vanilla</option>
            <option value="Chocolate">Chocolate</option>
            <option value="Oreo">Oreo</option>
            <option value="Caramel">Caramel</option>
            <option value="Lemon">Lemon</option>
            <option value="Strawberry">Strawberry</option>
            <option value="Pistachio">Pistachio</option>
          </select>
        </label>
        {renderCakeCharacterInput()}
        <label>
          Gluten Free:
          <input
            type="checkbox"
            checked={glutenFree}
            onChange={(e) => setGlutenFree(e.target.checked)}
          />
        </label>
        <label>
          Food Allergens:
          <input
            type="text"
            value={foodAllergens}
            maxLength={50}
            onChange={(e) => setFoodAllergens(e.target.value)}
            placeholder="Enter any food allergies"
          />
        </label>

        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
};

export default AddCartItem;


