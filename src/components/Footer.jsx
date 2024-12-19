import React from 'react';

const Footer = () => {
  return (
    <footer className="footer bg-body-secondary text-center py-3">
      <div className="d-flex align-items-center justify-content-center">
        <div className="col-md-6">
          <p className="mb-0">
            Metwally El-Hady{" "}
            <a
              href="https://example.com"
              className="text-decoration-underline text-dark fs-5"
              target="_blank"
              rel="noopener noreferrer"
            >
              © 2024 E-Commerce. All rights reserved.
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


