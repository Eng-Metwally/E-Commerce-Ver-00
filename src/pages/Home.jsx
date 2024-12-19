import React, { useRef } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Main from '../components/Main';
import Products from '../components/Products';

const Home = () => {
  const productsRef = useRef(null);

  const handleScrollToProducts = () => {
    const navbarHeight = document.querySelector('.navbar').offsetHeight;
    
    window.scrollTo({
      top: productsRef.current.offsetTop - navbarHeight,
      behavior: 'smooth',
    });
  };

  const handlehomeClick = () => {
    console.log('Scrolling to top');
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }

  return (
    <>
      <Navbar onProductsClick={handleScrollToProducts} onHomeClick={handlehomeClick} />
      <Main />
      <div ref={productsRef}>
        <Products />
      </div>
      <Footer />
    </>
  );
};

export default Home;



