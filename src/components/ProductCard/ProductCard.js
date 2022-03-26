import { useContext } from 'react';

import { CartContext } from '../../contexts/cart';
import Button from '../Button/Button';

import {
  ProductCardContainer,
  Footer,
  Name,
  Price,
} from './productCard.styles.js';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const handleClick = () => addItemToCart(product);

  return (
    <ProductCardContainer>
      <img src={imageUrl} alt={name} />
      <Footer>
        <Name>{name.toUpperCase()}</Name>
        <Price>{`$${price}`}</Price>
      </Footer>
      <Button buttonType="inverted" onClick={handleClick}>
        Add to cart
      </Button>
    </ProductCardContainer>
  );
};

export default ProductCard;
