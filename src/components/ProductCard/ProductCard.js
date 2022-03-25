import { useContext } from 'react';

import { CartContext } from '../../contexts/cart';
import Button from '../Button/Button';

import './product-card.scss';

const ProductCard = ({ product }) => {
  const { addItemToCart } = useContext(CartContext);
  const { name, price, imageUrl } = product;

  const handleClick = () => addItemToCart(product);

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name.toUpperCase()}</span>
        <span className="price">{`$${price}`}</span>
      </div>
      <Button buttonType="inverted" onClick={handleClick}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;