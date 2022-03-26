import {
  CartItemContainer,
  CartItemImage,
  ItemDetails,
  Name,
} from './cartItem.styles';

const CartItem = ({ cartItem }) => {
  const { name, quantity, imageUrl, price } = cartItem;
  return (
    <CartItemContainer>
      <CartItemImage src={imageUrl} alt={name} />
      <ItemDetails>
        <Name>{name}</Name>
        <span className="price">
          {quantity} x {price} = ${quantity * price}
        </span>
      </ItemDetails>
    </CartItemContainer>
  );
};

export default CartItem;
