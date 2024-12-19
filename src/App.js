import React from "react";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import 'font-awesome/css/font-awesome.min.css';
// import "../node_modules/font-awesome/css/font-awesome.min.css"
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Home from "./pages/Home";
import Product from "./pages/Product"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Checkout from "./pages/Chechout"
import PageNotFound from "./pages/PageNotFound"
import { Toaster } from 'react-hot-toast';
import { Provider } from 'react-redux';
import store from './redux/Store';

const Lazy1 = React.lazy(() =>import("./pages/Products") )


function App() {
  return (
    
    <Provider store={store}>
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            
            <Route path="/product" element={
              <React.Suspense fallback="Data is Loading...." >
                  <Lazy1></Lazy1>
              </React.Suspense>
            } />

            <Route path="/product/:id" element={<Product/>} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Toaster />
        </Router>
      </div>
    </Provider>
  );
}

export default App;
