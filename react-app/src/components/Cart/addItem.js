import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { thunkAddCartItem, thunkGetCartItems } from '../../store/cart';
import { useHistory } from 'react-router-dom';
import './cart.css';

const AddCartItem = ({ cakeId, cake }) => {
  const dispatch = useDispatch();
  const [size, setSize] = useState('');
  const [flavor, setFlavor] = useState('');
  const [cakeCharacter, setCakeCharacter] = useState('');
  const [glutenFree, setGlutenFree] = useState('Regular');
  const [foodAllergens, setFoodAllergens] = useState('');
  const [price, setPrice] = useState('');
  const [selectedColors, setSelectedColors] = useState([]);
  const [otherColor, setOtherColor] = useState('');
  const history = useHistory();
  const sessionUser = useSelector((state) => state.session.user);

  useEffect(() => {
    if (cake) {
      setPrice(cake.smallPrice);
    }
  }, [cake]);

  const handleColorChange = (selectedColor) => {
    if (selectedColors.length === 2) {
      if (!selectedColors.includes(selectedColor)) {
        setSelectedColors([selectedColors[0], selectedColor]);
      } else {
        setSelectedColors([selectedColor]);
      }
    } 
    else {
      setSelectedColors((prevColors) => {
        if (prevColors.includes(selectedColor)) {
          return prevColors.filter((color) => color !== selectedColor);
        } else {
          return [...prevColors, selectedColor];
        }
      });
    }
  };

  const handleOtherColorChange = (e) => {
    const selectedOtherColor = e.target.value;
    setOtherColor(selectedOtherColor);
  };

  const handleFlavorChange = (e) => {
    const selectedFlavor = e.target.value;
    setFlavor(selectedFlavor);
  };

 const getGlutenFreeLabel = (glutenFree) => {
    return glutenFree ? 'Gluten Free' : 'Regular';
  };

  const handleGlutenFreeChange = (e) => {
    const selectedOption = e.target.value === 'gluten-free';
    setGlutenFree(getGlutenFreeLabel(selectedOption));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    if (sessionUser) {
      const formData = {
        size,
        color: selectedColors.length > 0 ? selectedColors[0] : '',
        color2: selectedColors.length === 2 ? selectedColors[1] : '',
        otherColor,
        flavor,
        cakeCharacter,
        glutenFree,
        foodAllergens,
      };

      dispatch(thunkAddCartItem(cakeId, formData));
      setSize('');
      setSelectedColors([]);
      setFlavor('');
      setCakeCharacter('');
      setGlutenFree('Regular');
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

  const availableColors = ['white', 'pink', 'hotPink', 'plum', 'blueviolet', 'lightskyblue', 'dodgerBlue', 'turquoise', 'lightgreen', 'gold', 'coral', 'orangeRed', 'burlywood'];

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
            placeholder='max 3 characters'
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
            placeholder='max 3 characters'
            required
            onInvalid={(e) => e.target.setCustomValidity('Please enter your desired letters.')}
            onInput={(e) => e.target.setCustomValidity('')}
          />
        </label>
      );
    } else if (cake.category === 'numbers') {
      return (
        <label>
          Choice of number: 
          <input
            type="text"
            value={cakeCharacter}
            onChange={(e) => setCakeCharacter(e.target.value)}
            maxLength={2}
            required
            placeholder='max 2 characters'
            pattern="[0-9]*" 
            title="Please enter a valid number."
            onInvalid={(e) => e.target.setCustomValidity('Please enter your desired number.')}
            onInput={(e) => e.target.setCustomValidity('')}
          />
        </label>
      );
    } else {
      return null;
    }
  };

  // Function to check if any colors are selected
  const areColorsSelected = () => {
    return selectedColors.length > 0 || otherColor.length > 0;
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-container">
        <p>${price}.00</p>
        <label className='center'>
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
        {renderCakeCharacterInput()}
        {cake.category !== 'holiday' && (
          <label>
            <p>Please select up to 2 colors </p>
            <div className="color-swatches">
              {availableColors.map((colorOption) => (
                <label
                  key={colorOption}
                  className={`color-swatch ${selectedColors.includes(colorOption) ? 'selected' : ''}`}
                  style={{ backgroundColor: colorOption }}
                >
                  <input
                    type="checkbox"
                    value={colorOption}
                    // checked={selectedColors.includes(colorOption)}
                    onChange={() => handleColorChange(colorOption)}
                    required={!areColorsSelected()} // Set required only if no colors are selected
                    onInvalid={(e) => {
                      if (areColorsSelected()) {
                        e.target.setCustomValidity(''); // Reset custom validity if colors are selected
                      } else {
                        e.target.setCustomValidity('Please select a color or spicify if other');
                      }
                    }}
                    onInput={(e) => e.target.setCustomValidity('')}
                  />
                </label>
              ))}
            </div>
          </label>
        )}
        {cake.category !== 'holiday' && (
            <label className='center'>
              Not on the list? Specify here
              <input
                type="text"
                value={otherColor}
                maxLength={50}
                onChange={handleOtherColorChange}
                placeholder='Custom colors'
              />
            </label>
            )}
        <label className='center'>
        
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
        
<label className='center'>
          Base Option:
          <div className="radio-buttons">
            <label className={`radio-button ${glutenFree === 'Regular' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="glutenFree"
                value="regular"
                checked={glutenFree === 'Regular'}
                onChange={handleGlutenFreeChange}
              />
              Regular
            </label>
            <label className={`radio-button ${glutenFree === 'Gluten Free' ? 'selected' : ''}`}>
              <input
                type="radio"
                name="glutenFree"
                value="gluten-free"
                checked={glutenFree === 'Gluten Free'}
                onChange={handleGlutenFreeChange}
              />
              Gluten Free
            </label>
          </div>
        </label>
        <label >
         Design notes / Allergies if any
          <textarea
            type="text"
            className="center"
            value={foodAllergens}
            maxLength={50}
            onChange={(e) => setFoodAllergens(e.target.value)}
            cols='40'
            rows='7'
            
          />
        </label>

        <button type="submit">Add to Cart</button>
      </form>
    </div>
  );
};

export default AddCartItem;
