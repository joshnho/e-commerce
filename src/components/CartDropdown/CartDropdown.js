import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { CartContext } from '../../contexts/cart';
import CartItem from '../CartItem/CartItem';
import Button from '../Button/Button';

import {
  CartDropdownContainer,
  CartItems,
  EmptyMessage,
} from './cartDropdown.styles';

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext);
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => (
            <CartItem key={`cartItem-id-${item.id}`} cartItem={item} />
          ))
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={handleClick}>Checkout</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
