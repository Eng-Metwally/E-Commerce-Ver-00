import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/Action';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Marquee from 'react-fast-marquee';

const Product = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [similarProducts, setSimilarProducts] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`https://fakestoreapi.com/products/${id}`);
        const data = await response.json();
        setProduct(data);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    };

    const fetchSimilarProducts = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        const data = await response.json();
        setSimilarProducts(data.filter((prod) => prod.id !== parseInt(id)).slice(0, 5));
      } catch (error) {
        console.error('Error fetching similar products:', error);
      }
    };

    fetchProduct();
    fetchSimilarProducts();
  }, [id]);

  const handleAddToCart = () => {
    if (product) {
      dispatch(addToCart({ ...product, quantity: 1 }));
    }
  };

  if (!product) {
    return <p>Loading product details...</p>;
  }

  return (
    <>
      <Navbar />
      <div className="container my-5">
        <div className="row">
          <div className="col-md-6">
            <img 
              src={product.image} 
              alt={product.title} 
              className="img-fluid"
              style={{ height: '400px', objectFit: 'contain' }}
            />
          </div>
          <div className="col-md-6">
            <h4 className="text-uppercase mb-4 fs-2 fw-bold text-muted">{product.category}</h4>
            <div className="mb-3">
              <h3 className="display-4 fw-light">{product.title}</h3>
              <div className="d-block fw-light fs-3">
                <span>{product.rating.rate}</span>
                <i className="fas fa-star"></i>
              </div>
              <p className="display-4 fw-light">${product.price}</p>
            </div>
            <p className="fs-4" style={{ letterSpacing: '2px' }}>
              {product.description}
            </p>

            <div className="d-flex gap-3 mt-4">
              <button
                className="btn btn-dark text-white border border-dark rounded-3 px-4 py-2"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
              <button
                className="btn btn-secondary text-white border border-dark rounded-3 px-4 py-2"
                onClick={() => navigate('/cart')}
              >
                Go To Cart
              </button>
            </div>
          </div>
        </div>

        <div className="my-5">
          <h2 className="text-center mb-4">You May Also Like</h2>
          <Marquee gradient={false} speed={50} pauseOnHover={true}>
            {similarProducts.map((product) => (
              <div key={product.id} className="card mx-3" style={{ width: '300px', height: '400px' }}>
                <div className="d-flex justify-content-center align-items-center" style={{ height: '150px' }}>
                  <img 
                    src={product.image} 
                    alt={product.title} 
                    className="card-img-top mt-3"
                    style={{ maxHeight: '100%', objectFit: 'contain' }}
                  />
                </div>
                <div className="card-body d-flex flex-column justify-content-center align-items-center" style={{ height: '200px' }}>
                  <h5 className="card-title text-center" style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                    {product.title.length > 15 ? `${product.title.substring(0, 15)}...` : product.title}
                  </h5>
                  <p className="card-text text-center my-3">${product.price}</p>
                  <div className="d-flex gap-2 justify-content-center">
                    <button className="btn btn-dark btn-sm text-white border border-dark rounded-3 px-3 py-3">
                      Buy Now
                    </button>
                    <button className="btn btn-secondary btn-sm text-white border border-dark rounded-3 px-3 py-3">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Product;
