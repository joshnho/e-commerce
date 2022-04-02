import { useContext } from 'react';

import { CartContext } from '../../contexts/cart';

import {
  CheckoutItemContainer,
  ImageContainer,
  Image,
  Name,
  Quantity,
  Price,
  Arrow,
  Value,
  RemoveButton,
} from './checkoutItem.styles.js';

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
    <CheckoutItemContainer>
      <ImageContainer>
        <Image src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <Name name="name">{name.toUpperCase()}</Name>
      <Quantity name="quantity">
        <Arrow name="decrementItem" onClick={handleClick}>
          &#10094;
        </Arrow>
        <Value>{quantity}</Value>
        <Arrow name="incrementItem" onClick={handleClick}>
          &#10095;
        </Arrow>
      </Quantity>
      <Price name="price">{price}</Price>
      <RemoveButton name="deleteItem" onClick={handleClick}>
        &#10005;
      </RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;
