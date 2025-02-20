import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Filter from '../components/Filter';
import '../styles/Shop.css';
import HomeS6 from '../components/HomeS6';
import { SlArrowDown } from "react-icons/sl";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const proData = [
  {
    id: 1,
    imgSrc: '/images/image 22.png',
    name: 'Apple iPhone 14 Pro',
    category:"cat1",
    price: 1999.00,
    brand: 'Apple',
    color: 'Black'
  },
  {
    id: 2,
    imgSrc: '/images/image 20.png',
    name: 'Boat Surface Go',
    category:"cat2",
    price: 399.00,
    brand: 'Boat',
    color: 'Blue'
  },
  {
    id: 3,
    imgSrc: '/images/image 18.png',
    name: 'Samsung Galaxy S22 Ultra',
    category:"cat3",
    price: 1350.00,
    brand: 'Samsung',
    color: 'Red'
  },
  {
    id: 4,
    imgSrc: '/images/image 24.png',
    name: 'Canon Lumix DC-GH5 II',
    category:"cat4",
    price: 1500.00,
    brand: 'Canon',
    color: 'Black'
  },
  {
    id: 5,
    imgSrc: '/images/image 28.png',
    name: 'Fossil Gen 6 Smart Watch',
    category:"cat5",
    price: 450.00,
    brand: 'Fossil',
    color: 'Blue'
  },
  {
    id: 6,
    imgSrc: '/images/image 21.png',
    name: 'LG 4K Ultra UHD TV',
    category:"cat5",
    price: 1500.00,
    brand: 'LG',
    color: 'Black'
  },
  {
    id: 7,
    imgSrc: '/images/image 22.png',
    name: 'Apple iPhone 14 Plus',
    category:"cat1",
    price: 850.00,
    brand: 'Apple',
    color: 'Red'
  },
  {
    id: 8,
    imgSrc: '/images/image 25.png',
    name: 'Asus ROG Delta S',
    category:"cat6",
    price: 250.00,
    brand: 'Asus',
    color: 'Black'
  },
  {
    id: 9,
    imgSrc: '/images/image 19.png',
    name: 'Apple iPad Mini 6 Wi-Fi',
    category:"cat1",
    price: 500.00,
    brand: 'Apple',
    color: 'Orange'
  },
  {
    id: 10,
    imgSrc: '/images/image 26.png',
    name: 'Xiaomi Fimi X8 Mini',
    category:"cat7",
    price: 650.00,
    brand: 'Xiaomi',
    color: 'White'
  },
  {
    id: 11,
    imgSrc: '/images/image 17.png',
    name: 'Canon QuietComfort 45',
    category:"cat4",
    price: 300.00,
    brand: 'Canon',
    color: 'Black'
  },
  {
    id: 12,
    imgSrc: '/images/image 33.png',
    name: 'ASUS ZenBook Pro 15 Flip',
    category:"cat6",
    price: 2300.00,
    brand: 'Asus',
    color: 'Blue'
  },
  {
    id: 13,
    imgSrc: '/images/image 34 (1).png',
    name: 'Samsung Galaxy Tab A8',
    category:"cat3",
    price: 250.00,
    brand: 'Samsung',
    color: 'Green'
  },
  {
    id: 14,
    imgSrc: '/images/image 35.png',
    name: 'Dell Bravia Smart TV',
    category:"cat8",
    price: 1500.00,
    brand: 'Dell',
    color: 'Black'
  },
  {
    id: 15,
    imgSrc: '/images/image 17.png',
    name: 'Dell QuietComfort 45',
    category:"cat8",
    price: 300.00,
    brand: 'Dell',
    color: 'Black'
  },
  {
    id: 16,
    imgSrc: '/images/image 19.png',
    name: 'Canon QuietComfort 45',
    category:"cat4",
    price: 300.00,
    brand: 'Canon',
    color: 'Black'
  },
  {
    id: 17,
    imgSrc: '/images/image 21.png',
    name: 'LG 4K Ultra UHD TV',
    category:"cat5",
    price: 1550.00,
    brand: 'LG',
    color: 'Black'
  },
  {
    id: 18,
    imgSrc: '/images/image 22.png',
    name: 'Apple iPhone 14 Plus',
    price: 850.00,
    category:"cat1",
    brand: 'Apple',
    color: 'Red'
  },
  {
    id: 19,
    imgSrc: '/images/image 25.png',
    name: 'Asus ROG Delta S',
    category:"cat6",
    price: 250.00,
    brand: 'Asus',
    color: 'Yellow'
  },
  {
    id: 20,
    imgSrc: '/images/image 19.png',
    name: 'Apple iPad Mini 6 Wi-Fi',
    price: 500.00,
    category:"cat1",
    brand: 'Apple',
    color: 'Gray'
  },
  {
    id: 21,
    imgSrc: '/images/image 26.png',
    name: 'Xiaomi Fimi X8 Mini',
    category:"cat7",
    price: 650.00,
    brand: 'Xiaomi',
    color: 'White'
  },
  {
    id: 22,
    imgSrc: '/images/image 17.png',
    name: 'Dell QuietComfort 45',
    category:"cat8",
    price: 300.00,
    brand: 'Dell',
    color: 'Blue'
  },
  {
    id: 23,
    imgSrc: '/images/image 20.png',
    name: 'Boat Surface Go',
    price: 399.00,
    category:"cat2",
    brand: 'Boat',
    color: 'Blue'
  },
  {
    id: 24,
    imgSrc: '/images/image 18.png',
    name: 'Samsung Galaxy S22 Ultra',
    category:"cat3",
    price: 1350.00,
    brand: 'Samsung',
    color: 'Red'
  },
  {
    id: 25,
    imgSrc: '/images/image 24.png',
    name: 'Fossil Lumix DC-GH5 II',
    category:"cat4",
    price: 1500.00,
    brand: 'Fossil',
    color: 'Black'
  },
  {
    id: 26,
    imgSrc: '/images/image 28.png',
    name: 'Fossil Gen 6 Smart Watch',
    category:"cat4",
    price: 450.00,
    brand: 'Fossil',
    color: 'Blue'
  },
  {
    id: 27,
    imgSrc: '/images/image 21.png',
    name: 'LG 4K Ultra UHD TV',
    category:"cat5",
    price: 1500.00,
    brand: 'LG',
    color: 'Black'
  },
  {
    id: 28,
    imgSrc: '/images/image 22.png',
    name: 'Apple iPhone 14 Plus',
    price: 850.00,
    category:"cat1",
    brand: 'Apple',
    color: 'Red'
  },
  {
    id: 29,
    imgSrc: '/images/image 25.png',
    name: 'Asus ROG Delta S',
    category:"cat6",
    price: 250.00,
    brand: 'Asus',
    color: 'Black'
  },
  {
    id: 30,
    imgSrc: '/images/image 19.png',
    name: 'Apple iPad Mini 6 Wi-Fi',
    price: 500.00,
    category:"cat1",
    brand: 'Apple',
    color: 'Orange'
  },
  {
    id: 31,
    imgSrc: '/images/image 26.png',
    name: 'Xiaomi Fimi X8 Mini',
    category:"cat7",
    price: 650.00,
    brand: 'Xiaomi',
    color: 'White'
  },
  {
    id: 32,
    imgSrc: '/images/image 17.png',
    name: 'Canon QuietComfort 45',
    category:"cat4",
    price: 300.00,
    brand: 'Canon',
    color: 'Black'
  },
  {
    id: 33,
    imgSrc: '/images/image 33.png',
    name: 'ASUS ZenBook Pro 15 Flip',
    category:"cat6",
    price: 2300.00,
    brand: 'Asus',
    color: 'Blue'
  },
  {
    id: 34,
    imgSrc: '/images/image 34 (1).png',
    name: 'Samsung Galaxy Tab A8',
    category:"cat3",
    price: 250.00,
    brand: 'Samsung',
    color: 'Green'
  },
  {
    id: 35,
    imgSrc: '/images/image 35.png',
    name: 'Hp Bravia Smart TV',
    category:"cat9",
    price: 1500.00,
    brand: 'Hp',
    color: 'Black'
  },
  {
    id: 36,
    imgSrc: '/images/image 17.png',
    name: 'Dell QuietComfort 45',
    category:"cat8",
    price: 300.00,
    brand: 'Dell',
    color: 'Black'
  },
  {
    id: 37,
    imgSrc: '/images/image 19.png',
    name: 'Bose QuietComfort 45',
    category:"cat10",
    price: 300.00,
    brand: 'Bose',
    color: 'Black'
  },
  {
    id: 38,
    imgSrc: '/images/image 21.png',
    name: 'LG 4K Ultra UHD TV',
    category:"cat5",
    price: 1500.00,
    brand: 'LG',
    color: 'Black'
  },
  {
    id: 39,
    imgSrc: '/images/image 22.png',
    name: 'Apple iPhone 14 Plus',
    price: 850.00,
    brand: 'Apple',
    category:"cat1",
    color: 'Red'
  },
  {
    id: 40,
    imgSrc: '/images/image 25.png',
    name: 'Asus ROG Delta S',
    category:"cat6",
    price: 250.00,
    brand: 'Asus',
    color: 'Yellow'
  },
  {
    id: 41,
    imgSrc: '/images/image 19.png',
    name: 'Apple iPad Mini 6 Wi-Fi',
    price: 500.00,
    category:"cat1",
    brand: 'Apple',
    color: 'Gray'
  },
  {
    id: 42,
    imgSrc: '/images/image 26.png',
    name: 'Xiaomi Fimi X8 Mini',
    category:"cat7",
    price: 650.00,
    brand: 'Xiaomi',
    color: 'White'
  },
  {
    id: 43,
    imgSrc: '/images/image 17.png',
    name: 'Boat QuietComfort 45',
    price: 300.00,
    category:"cat2",
    brand: 'Boat',
    color: 'Blue'
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
      <Filter onFilterChange={onFilterChange} proData={proData} />
        <div className='proListtop'>
          <div className='listop'>
            <div className='listop-img-img-span'>
              <img src="./images/grid 02.svg" alt="" />
              <img src="./images/list view-circle.svg" alt="" />
              <span>Showing {indexOfFirstProduct + 1}–{Math.min(indexOfLastProduct, filteredProducts.length)} of {filteredProducts.length} results</span>
            </div>
            <div className='listop-rigt'>
              <span>Sort by latest</span>
              <SlArrowDown />
            </div>
          </div>
          <div className="product-list">
            {currentProducts.map(product => (
              <Link to={`/product/${product.id}`} key={product.id} className="product-item-link">
                <div className="product-item">
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
              </Link>
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
