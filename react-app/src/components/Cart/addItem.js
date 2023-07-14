import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkAddCartItem, thunkGetCartItems } from '../../store/cart';
import { useHistory } from 'react-router-dom';
import './cart.css';

const AddCartItem = ({ cakeId, cake }) => {
  const dispatch = useDispatch();
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [flavor, setFlavor] = useState('');
  const [cakeCharacter, setCakeCharacter] = useState('');
  const [glutenFree, setGlutenFree] = useState(false);
  const [foodAllergens, setFoodAllergens] = useState('');
  const [price, setPrice] = useState('');
  const [otherColor, setOtherColor] = useState('');
  const history = useHistory();
  const sessionUser = useSelector(state => state.session.user);

  useEffect(() => {
    if (cake) {
      setPrice(cake.smallPrice);
    }
  }, [cake]);

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

  const handleGlutenFreeChange = (e) => {
    const selectedOption = e.target.value === 'gluten-free';
    setGlutenFree(selectedOption);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (sessionUser) {
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
      setPrice(cake.smallPrice);
      setOtherColor('');
      dispatch(thunkGetCartItems());
      history.push('/cart');
    } else {
      history.push('/login');
    }
  };

  const getSelectedSizePrice = (selectedSize) => {
    if (selectedSize === 'Small') {
      return cake.smallPrice;
    } else if (selectedSize === 'Medium') {
      return cake.mediumPrice;
    } else if (selectedSize === 'Large') {
      return cake.largePrice;
    }

    return 0;
  };

  const handleSizeChange = (e) => {
    const selectedSize = e.target.value;
    setSize(selectedSize);
    setPrice(getSelectedSizePrice(selectedSize));
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
    } else if (cake.category === 'letters' && (cake.name === 'Double Letters Cake' || cake.name === 'Three letters Cake')) {
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
      );
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
        <p>${price}.00</p>
        <label>
          Size:
          <select
            value={size}
            onChange={handleSizeChange}
            required
            onInvalid={(e) => e.target.setCustomValidity('Please select a Size.')}
            onInput={(e) => e.target.setCustomValidity('')}
          >
            <option value="">Select Size</option>
            <option value="Small">Small (8-10 servings)</option>
            <option value="Medium">Medium (15-18 servings)</option>
            <option value="Large">Large (20-25 servings)</option>
          </select>
        </label>
        <label>
          Color:
          <select
            value={color}
            onChange={handleColorChange}
            required
            onInvalid={(e) => e.target.setCustomValidity('Please select a color.')}
            onInput={(e) => e.target.setCustomValidity('')}
          >
            <option value="">Select Color</option>
            <option value="pink">Pink</option>
            <option value="blue">Blue</option>
            <option value="yellow">Yellow</option>
            <option value="red">Red</option>
            <option value="green">Green</option>
            <option value="purple">Purple</option>
            <option value="As Shown">As Shown</option>
            <option value="other">Other</option>
          </select>
        </label>
        {color === 'other' && (
          <label>
            Other Color:
            <input
              type="text"
              value={otherColor}
              maxLength={50}
              onChange={handleOtherColorChange}
              required
              onInvalid={(e) => e.target.setCustomValidity('Please specify the color.')}
              onInput={(e) => e.target.setCustomValidity('')}
            />
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
          Base Option:
          <div className="radio-buttons">
            <label className={`radio-button ${!glutenFree ? 'selected' : ''}`}>
              <input
                type="radio"
                name="glutenFree"
                value="regular"
                checked={!glutenFree}
                onChange={handleGlutenFreeChange}
              />
              Regular
            </label>
            <label className={`radio-button ${glutenFree ? 'selected' : ''}`}>
              <input
                type="radio"
                name="glutenFree"
                value="gluten-free"
                checked={glutenFree}
                onChange={handleGlutenFreeChange}
              />
              Gluten Free
            </label>
          </div>
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





