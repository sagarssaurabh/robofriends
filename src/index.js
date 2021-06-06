import React from 'react';
// react can be used for different devices and devices and we can use it according to screen we are rendering to
//  like for DOM we have ReactDOM , for mobile we have ReactNative etc.
import ReactDOM from 'react-dom';
// React allow us to add css file to not just one file but to different component like for App.js we have app.css
// and for index.js we have index.css and below is how we use it
// "./" means file is in same folder
import './index.css';
// once we import above three file we can import any other file without any error of bundling other file

import App from './container/App';
// we created a new component Hello.js and import it here
// import Hello from './Hello';
 // import Card from './Card';
//tachyons provides bootstrap like classes and it is present in node module
import 'tachyons';
//since robots.js is using export istead of export default we have to deconstruct this component
// import { robots } from './robots';
// import CardList from './CardList';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  // we will add property or prop i.e greeting which can be used in the component
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
