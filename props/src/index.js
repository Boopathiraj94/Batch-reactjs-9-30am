import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Product,{Sample,Sample1,Sample2} from './components/Product'
import app from './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));

   

root.render(
  <React.StrictMode>
     <Product data="Denish" />
     <Sample name="Surendhar" age={26} isMarried = {false} />
     <Sample1 name="Boopathiraja" age={30} profession={"trainer of SDLC"}/>
     <Sample2 name="iphone 17 pro max " amount="$15400" dec={"fast battery backup on your iphone"}/>
  </React.StrictMode>
);
 
