import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { updateProductQuantity } from '../redux/Action';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const shippingCost = 30;
  const totalAmount = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  const totalQuantity = cartItems.reduce((total, item) => total + item.quantity, 0);

  const handleCheckout = () => {
    navigate('/checkout');
  };

  const handleQuantityChange = (product, operation) => {
    if (operation === 'increase') {
      dispatch(updateProductQuantity(product, product.quantity + 1));
    } else if (operation === 'decrease' && product.quantity > 0) {
      dispatch(updateProductQuantity(product, product.quantity - 1));
    } else if (operation === 'decrease' && product.quantity === 1) {
      dispatch(updateProductQuantity(product, 0));
    }
  };
  
  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-8">
            <h3 className="mb-4">Your Cart</h3>
            {cartItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              cartItems.map((product) => (
                <div key={product.id} className="d-flex align-items-center mb-4 p-3 border rounded">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="me-3"
                    style={{ width: '80px', height: '80px', objectFit: 'cover' }}
                  />
                  <div className="flex-grow-1">
                    <h5 className="mb-1">{product.title}</h5>
                    <p className="mb-1">${product.price.toFixed(2)}</p>
                  </div>
                  <div className="d-flex align-items-center ms-3">
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => handleQuantityChange(product, 'decrease')}
                      disabled={product.quantity === 1}
                    >
                      -
                    </button>
                    <span className="mx-2">{product.quantity}</span>
                    <button
                      className="btn btn-outline-dark"
                      onClick={() => handleQuantityChange(product, 'increase')}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>

          <div className="col-md-4">
            <h3 className="mb-4">Order Summary</h3>
            <div className="p-4 border rounded">
              <div className="d-flex justify-content-between mb-3">
                <span>Products ({totalQuantity})</span>
                <span>${totalAmount.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-3">
                <span>Shipping</span>
                <span>${shippingCost.toFixed(2)}</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <strong>Total Amount</strong>
                <strong>${(totalAmount + shippingCost).toFixed(2)}</strong>
              </div>
              <button
                className="btn btn-dark w-100"
                onClick={handleCheckout}
                disabled={cartItems.length === 0}
              >
                Go To Checkout
              </button>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Cart;

