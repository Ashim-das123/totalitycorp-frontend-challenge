
// import './App.css';
// import Header from './components/Header';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import Home from './components/Home';
// import Cart from './components/Cart';
// function App() {
//   return (
//     <BrowserRouter>
//       <Header />
//       <div>
//         <Routes>


//           <Route path='/' element={<Home />} />
//           <Route path='/cart' element={<Cart />} />

//         </Routes>
//       </div>

//     </BrowserRouter>


//   );
// }

// export default App;
// ==================
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./components/Home";
import Cart from "./components/Cart";
import Address from "./components/Address"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <div className="App">
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart">
          <Cart />
        </Route>
        <Route path="/address">
          <Address />
        </Route>
      </div>
    </BrowserRouter>
  );
}

export default App;
