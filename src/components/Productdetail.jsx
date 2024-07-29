import React from 'react';
import { useParams } from 'react-router-dom';
import '../styles/Productdetail.css';

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

function ProductDetail() {
  const { productId } = useParams();
  const product = proData.find(item => item.id === parseInt(productId));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className='container'>
      <div className='product-detail'>
        <div className='breadcrumb'>
          <span>Home</span>
          <img src='/images/apro.svg' alt=''></img>
          <span>Shop</span>
          <img src='/images/apro.svg' alt=''></img>
          <span>{product.name}</span>
        </div>
        <div className='product-info'>
          <img className='product-image' src={product.imgSrc} alt={product.name} />
          <div className='product-details'>
            <h1>{product.name}</h1>
            <p>${product.price.toFixed(2)}</p>
            <p>Brand: {product.brand}</p>
            <p>Color: {product.color}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;

