import React from 'react';

const Product = ({ name, company, image, price, rating, discount, availability }) => {
  return (
    <div className="product">
      <img src={image || 'placeholder.jpg'} alt={name} />
      <div className="product-details">
        <h3>{name}</h3>
        <p>By {company}</p>
        <div className="product-info">
          <span className="price">{price}</span>
          {discount && <span className="discount">{discount}% off</span>}
          <span className="rating">{rating}</span>
          <span className="availability">{availability ? 'In Stock' : 'Out of Stock'}</span>
        </div>
      </div>
    </div>
  );
};

export default Product;