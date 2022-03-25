import { useContext } from 'react';

import { CartContext } from '../../contexts/cart';

import './checkout-item.scss';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const { addItemToCart, removeItemFromCart, deleteItemFromCart } =
    useContext(CartContext);

  const handleClick = (e) => {
    const name = e.target.getAttribute('name');
    switch (name) {
      case 'decrementItem':
        removeItemFromCart(cartItem);
        break;
      case 'incrementItem':
        addItemToCart(cartItem);
        break;
      case 'deleteItem':
        deleteItemFromCart(cartItem);
        break;
      default:
        break;
    }
  };

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img src={imageUrl} alt={`${name}`} />
      </div>
      <span className="name" name="name">
        {name.toUpperCase()}
      </span>
      <span className="quantity" name="quantity">
        <div className="arrow" name="decrementItem" onClick={handleClick}>
          &#10094;
        </div>
        <div className="value">{quantity}</div>
        <div className="arrow" name="incrementItem" onClick={handleClick}>
          &#10095;
        </div>
      </span>
      <span className="price" name="price">
        {price}
      </span>
      <div className="remove-button" name="deleteItem" onClick={handleClick}>
        &#10005;
      </div>
    </div>
  );
};

export default CheckoutItem;
