import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Context from './context/Context';

import 'bootstrap/dist/css/bootstrap.min.css';
// import Context from './context/Contexts'
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Context>
      <App />
    </Context>

  </React.StrictMode>
);


//======
// import React from "react";
// import ReactDOM from "react-dom";
// import "./index.css";
// import App from "./App";
// import Context from "./context/Context";
// import "bootstrap/dist/css/bootstrap.min.css";

// ReactDOM.render(
//   <React.StrictMode>
//     <Context>
//       <App />
//     </Context>
//   </React.StrictMode>,
//   document.getElementById("root")
// );
