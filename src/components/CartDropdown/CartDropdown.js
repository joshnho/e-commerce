import { useContext } from 'react';

import { CartContext } from '../../contexts/cart';
import CartItem from '../CartItem/CartItem';
import Button from '../Button/Button';

import './cart-dropdown.scss';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem key={`cartItem-id-${item.id}`} cartItem={item} />
        ))}
      </div>
      <Button buttonType="">Checkout</Button>
    </div>
  );
};

export default CartDropdown;
