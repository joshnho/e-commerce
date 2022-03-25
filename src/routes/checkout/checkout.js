import { useContext } from 'react';

import { CartContext } from '../../contexts/cart';

import './checkout.scss';

const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart } =
    useContext(CartContext);

  return (
    <div>
      <h1>checkout page</h1>
      <div>
        {cartItems.map((item) => {
          const { name, quantity } = item;
          return (
            <div key={`checkout-item-id-${item.id}`}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br />
              <span onClick={() => removeItemFromCart(item)}>decrement</span>
              <br />
              <span onClick={() => addItemToCart(item)}>increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;
