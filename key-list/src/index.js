import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Product from './Product';

const root = ReactDOM.createRoot(document.getElementById('root'));

const productList = [
  {
    productname: "POCO",
    price: 20000,
    offerprice: 15000,
    img:'https://indiagadgetz.com/cdn/shop/products/MPH9230B_1200x1200.jpg?v=1669921171'
  },
  {
    productname: "Samsung",
    price: 25000,
    offerprice: 18000,
    img:'https://www.bigcmobiles.com/media/catalog/product/cache/e19e56cdd4cf1b4ec073d4305f5db95a/s/a/samsung_galaxy_a16_5g_light_green__1.jpg'
  },
  {
    productname: "IPhone",
    price: 200000,
    offerprice: 150000,
    img:'https://cdn1.smartprix.com/rx-ihDIwaWmc-w1200-h1200/hDIwaWmc.webp'
  },
  {
    productname: "VIVO",
    price: 50000,
    offerprice: 18000,
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD8nhT7CRVyGMa6g6FqjQYnzgD1yXmv4TI7g&s'
  },
  
]


const todos = [
  {
    task: "reading",
    completed: false,
  },
  {
    task: "Writing",
    completed: false,
  },
  {
    task: "project",
    completed: false,
  },
  {
    task: "module1",
    completed: false,
  },
  {
    task: "discussion",
    completed: false,
  },
]

root.render(
  <React.StrictMode>
    <App details={productList} />
    <Product tods={todos} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
