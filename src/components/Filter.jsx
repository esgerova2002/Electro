import React, { useState, useCallback } from 'react';
import '../styles/Filter.css';
import { SlArrowDown } from "react-icons/sl";

function Filter({ onFilterChange, proData = [] }) { // Default value is an empty array
  const [openSections, setOpenSections] = useState({
    cat: false,
    price: false,
    brand: false,
    color: false,
  });

  const [selectedBrands, setSelectedBrands] = useState([]);
  const [selectedColors, setSelectedColors] = useState([]);

  const toggleSection = useCallback((section) => {
    if (section === 'cat') {
      setOpenSections((prevState) => ({
        cat: !prevState.cat,
        price: !prevState.cat ? true : prevState.price,
        brand: !prevState.cat ? true : prevState.brand,
        color: !prevState.cat ? true : prevState.color,
      }));
    } else {
      setOpenSections((prevState) => ({
        ...prevState,
        [section]: !prevState[section],
      }));
    }
  }, []);

  const handleBrandChange = (brand) => {
    setSelectedBrands((prev) =>
      prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]
    );
    onFilterChange('brand', brand);
  };

  const handleColorChange = (color) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color]
    );
    onFilterChange('color', color);
  };

  // Check if proData is not undefined and has length
  const brandCounts = proData.reduce((counts, product) => {
    counts[product.brand] = (counts[product.brand] || 0) + 1;
    return counts;
  }, {});


  return (
    <div className='procatdir'>
      <div className='pdown'
        onClick={() => toggleSection('cat')}
        aria-controls="cat-filter"
        role="button"
        tabIndex={0}
      >
        <span className='catitle'>Product Categories </span> < SlArrowDown />
      </div>
      {openSections.cat && (
        <div id="cat-filter" className="filter">
          <div className="filter-section">
            <div className='pdown'
              onClick={() => toggleSection('price')}
              aria-controls="price-filter"
              role="button"
              tabIndex={0}
            >
              <span className='catitle'>Filter by Price</span> < SlArrowDown />
            </div>
            {openSections.price && (
              <input
                type="range"
                min="0"
                max="5000"
                onChange={(e) => onFilterChange('price', e.target.value)}
              />
            )}
          </div>
          <div className="filter-section">
            <div className='pdown'
              onClick={() => toggleSection('brand')}
              aria-controls="brand-filter"
              role="button"
              tabIndex={0}
            >
              <span className='catitle'>Filter by Brand </span>< SlArrowDown />
            </div>
            {openSections.brand && (
              <div className='selectF'>
                {['Apple', 'Boat', 'Dell', 'Hp', 'Samsung', 'LG', 'Canon', 'Asus', 'Xiaomi', 'Fossil'].map((brand) => (
                  <div className='optionFcard' key={brand}>
                    <input
                      type="checkbox"
                      id={brand}
                      value={brand}
                      checked={selectedBrands.includes(brand)}
                      onChange={() => handleBrandChange(brand)}
                    />
                    <label htmlFor={brand}>{brand}</label>
                    <span>({brandCounts[brand] || 0})</span>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="filter-section">
            <div className='pdown'
              onClick={() => toggleSection('color')}
              aria-controls="color-filter"
              role="button"
              tabIndex={0}
            >
              <span className='catitle'>Filter by Color</span> < SlArrowDown />
            </div>
            {openSections.color && (
              <div className='selectF'>
                {['Red', 'Black', 'Blue', 'Yellow', 'Green', 'Orange'].map((color) => (
                  <div className='optionFcard' key={color}>
                    <input
                      type="checkbox"
                      id={color}
                      value={color}
                      checked={selectedColors.includes(color)}
                      onChange={() => handleColorChange(color)}
                      className={`color-checkbox ${color.toLowerCase()}`}
                    />
                    <label htmlFor={color}>
                      <div className={`color-box ${color.toLowerCase()}`}></div>
                      <span>{color}</span>
                    </label>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default Filter;
