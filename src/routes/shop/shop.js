import { useContext } from 'react';

import ProductCard from '../../Components/ProductCard/ProductCard';
import { ProductsContext } from '../../contexts/products';

import './shop.scss';

const Shop = () => {
  const { products } = useContext(ProductsContext);

  return (
    <div className="products-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Shop;
