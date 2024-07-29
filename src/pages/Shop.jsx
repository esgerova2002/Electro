import React, { useState, useEffect } from 'react';
import Filter from '../components/Filter';
import '../styles/Shop.css';
import HomeS6 from '../components/HomeS6';
import { SlArrowDown } from "react-icons/sl";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const proData = [
  {
    id: 1,
    imgSrc: './images/image 22.png',
    name: 'Apple iPhone 14 Pro',
    price: 1999.00,
    brand: 'Apple',
    color: 'Black'
  },
  {
    id: 2,
    imgSrc: './images/image 20.png',
    name: 'Microsoft Surface Go',
    price: 399.00,
    brand: 'Microsoft',
    color: 'Silver'
  },
  {
    id: 3,
    imgSrc: './images/image 18.png',
    name: 'Samsung Galaxy S22 Ultra',
    price: 1350.00,
    brand: 'Samsung',
    color: 'White'
  },
  {
    id: 4,
    imgSrc: './images/image 24.png',
    name: 'Panasonic Lumix DC-GH5 II',
    price: 1500.00,
    brand: 'Panasonic',
    color: 'Black'
  },
  {
    id: 5,
    imgSrc: './images/image 28.png',
    name: 'Fossil Gen 6 Smart Watch',
    price: 450.00,
    brand: 'Fossil',
    color: 'Brown'
  },
  {
    id: 6,
    imgSrc: './images/image 21.png',
    name: 'LG 4K Ultra UHD TV',
    price: 5500.00,
    brand: 'LG',
    color: 'Black'
  },
  {
    id: 7,
    imgSrc: './images/image 22.png',
    name: 'Apple iPhone 14 Plus',
    price: 850.00,
    brand: 'Apple',
    color: 'Red'
  },
  {
    id: 8,
    imgSrc: './images/image 25.png',
    name: 'Asus ROG Delta S',
    price: 250.00,
    brand: 'Asus',
    color: 'Black'
  },
  {
    id: 9,
    imgSrc: './images/image 19.png',
    name: 'Apple iPad Mini 6 Wi-Fi',
    price: 500.00,
    brand: 'Apple',
    color: 'Gray'
  },
  {
    id: 10,
    imgSrc: './images/image 26.png',
    name: 'Xiaomi Fimi X8 Mini',
    price: 650.00,
    brand: 'Xiaomi',
    color: 'White'
  },
  {
    id: 11,
    imgSrc: './images/image 17.png',
    name: 'Bose QuietComfort 45',
    price: 300.00,
    brand: 'Bose',
    color: 'Black'
  },
  {
    id: 12,
    imgSrc: './images/image 33.png',
    name: 'ASUS ZenBook Pro 15 Flip',
    price: 2300.00,
    brand: 'Asus',
    color: 'Blue'
  },
  {
    id: 13,
    imgSrc: './images/image 34 (1).png',
    name: 'Samsung Galaxy Tab A8',
    price: 250.00,
    brand: 'Samsung',
    color: 'Silver'
  },
  {
    id: 14,
    imgSrc: './images/image 35.png',
    name: 'Sony Bravia Smart TV',
    price: 1500.00,
    brand: 'Sony',
    color: 'Black'
  },
  {
    id: 15,
    imgSrc: './images/image 17.png',
    name: 'Bose QuietComfort 45',
    price: 300.00,
    brand: 'Bose',
    color: 'Black'
  },
  {
    id: 16,
    imgSrc: './images/image 19.png',
    name: 'Bose QuietComfort 45',
    price: 300.00,
    brand: 'Bose',
    color: 'Black'
  },
  {
    id: 17,
    imgSrc: './images/image 21.png',
    name: 'LG 4K Ultra UHD TV',
    price: 5500.00,
    brand: 'LG',
    color: 'Black'
  },
  {
    id: 18,
    imgSrc: './images/image 22.png',
    name: 'Apple iPhone 14 Plus',
    price: 850.00,
    brand: 'Apple',
    color: 'Red'
  },
  {
    id: 19,
    imgSrc: './images/image 25.png',
    name: 'Asus ROG Delta S',
    price: 250.00,
    brand: 'Asus',
    color: 'Black'
  },
  {
    id: 20,
    imgSrc: './images/image 19.png',
    name: 'Apple iPad Mini 6 Wi-Fi',
    price: 500.00,
    brand: 'Apple',
    color: 'Gray'
  },
  {
    id: 21,
    imgSrc: './images/image 26.png',
    name: 'Xiaomi Fimi X8 Mini',
    price: 650.00,
    brand: 'Xiaomi',
    color: 'White'
  },
  {
    id: 22,
    imgSrc: './images/image 17.png',
    name: 'Bose QuietComfort 45',
    price: 300.00,
    brand: 'Bose',
    color: 'Black'
  },
];

function ProductPage() {
  const [filteredProducts, setFilteredProducts] = useState(proData);
  const [filters, setFilters] = useState({ price: 5000, brand: '', color: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 15;

  useEffect(() => {
    let updatedProducts = proData.filter(product => 
      product.price <= filters.price &&
      (filters.brand === '' || product.brand === filters.brand) &&
      (filters.color.length === 0 || filters.color.includes(product.color))
    );
    setFilteredProducts(updatedProducts);
  }, [filters]);

  const onFilterChange = (filterName, filterValue) => {
    if (filterName === 'color') {
      let colors = filters.color.includes(filterValue)
        ? filters.color.filter(color => color !== filterValue)
        : [...filters.color, filterValue];
      setFilters({ ...filters, color: colors });
    } else {
      setFilters({ ...filters, [filterName]: filterValue });
    }
    setCurrentPage(1);
  };

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  const totalPages = Math.ceil(filteredProducts.length / productsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const handlePrevClick = () => {
    if (currentPage > 1) {
      paginate(currentPage - 1);
    }
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      paginate(currentPage + 1);
    }
  };

  return (
    <div className='container'>
      <div className='apro'>
        <span>Shop</span><img src='./images/apro.svg' alt=''></img><span>All Products</span>
      </div>
      <div className='filterproductList'>
        <Filter onFilterChange={onFilterChange} />
        <div className='proListtop'>
          <div className='listop'>
            <div className='listop-img-img-span'>
              <img src="./images/grid 02.svg" alt="" />
              <img src="./images/list view-circle.svg" alt="" />
              <span>Showing 1–{filteredProducts.length > 10 ? 10 : filteredProducts.length} of {filteredProducts.length} results</span>
            </div>
            <div className='listop-rigt'>
              <span>Sort by latest</span>
              <SlArrowDown />
            </div>
          </div>
          <div className="product-list">
            {currentProducts.map(product => (
              <div key={product.id} className="product-item">
                <img className='pro-item-img' src={product.imgSrc} alt={product.name} />
                <div className='proItemBottom'>
                  <p>{product.name}</p>
                  <div className='s3-card-star'>
                    <img src="./images/star.png" alt="star" />
                    <img src="./images/star.png" alt="star" />
                    <img src="./images/star.png" alt="star" />
                    <img src="./images/star.png" alt="star" />
                    <img src="./images/star.png" alt="star" />
                  </div>
                  <p>${product.price.toFixed(2)}</p>
                </div>
                <div className='proItem-hover'>
                  <div className='proItem-hover-circle'><img src="./images/star.svg" alt="" /></div>
                  <div className='proItem-hover-circle'><img src="./images/arrow sort.svg" alt="" /></div>
                  <div className='proItem-hover-circle'><img src="./images/eye.svg" alt="" /></div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="pagination">
          <FaArrowLeft className='pagIcon' onClick={handlePrevClick} />
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => paginate(i + 1)}
              className={currentPage === i + 1 ? 'active' : ''}
            >
              {i + 1}
            </button>
          ))}
          <FaArrowRight className='pagIcon' onClick={handleNextClick} />
        </div>
      </div>
      <HomeS6 />
    </div>
  );
}

export default ProductPage;
