import React from 'react';

const Home = () => {
  return (
    <>
      <div className='hero border-1 pb-3'>
        <div className='card bg-dark text-white border-0 mx-3'>
          <img
            className='card-img'
            src='./assets/main-img4.jpg'
            alt='Card'
            style={{ height: '90vh', objectFit: 'cover' }}
          />
          <div className=' container card-img-overlay d-flex align-items-center'>
            <div className='text-start'>
              <h5 className='card-title fs-1 fw-lighter'>Welcome To Our Store</h5>
              <p className='card-text fs-4 d-none d-sm-block'>
                Welcome to our store! Discover a wide range of high-quality products tailored to meet your every need. From the latest trends in fashion and accessories to essential home goods, electronics, and more, we offer something for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;



