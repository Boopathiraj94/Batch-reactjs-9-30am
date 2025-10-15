import React from 'react';
import ReactDOM from 'react-dom/client';
 
// import Events from './Events';
// import Employees from './components/Employees';
// import Sales from './components/Sales';
import UserLists from './components/UserLists';
 
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <UserLists />
  </React.StrictMode>
);
 
