import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-secondary py-3 sticky-top">
      <div className="container fs-5">
        <NavLink className="navbar-brand" to="/"><span className='fs-3 fw-bold'>E-Commerce</span></NavLink>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <NavLink className="nav-link" to="/" activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/product" activeClassName="active">Products</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about" activeClassName="active">About</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact" activeClassName="active">Contact</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <NavLink 
                className="nav-link btn btn-secondary border border-dark rounded-3 px-4 hover-effect m-2" 
                to="/login" 
                activeClassName="active"
              >
                <i className="fas fa-sign-in-alt me-1"></i>
                Login
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link btn btn-secondary border border-dark rounded-3 px-4 hover-effect m-2" 
                to="/register" 
                activeClassName="active"
              >
                <i className="fa fa-user-plus me-1"></i>
                Register
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink 
                className="nav-link btn btn-secondary border border-dark rounded-3 px-4 hover-effect m-2" 
                to="/cart" 
                activeClassName="active"
              >
                <i className="fa fa-shopping-cart me-1"></i>
                Cart
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;












