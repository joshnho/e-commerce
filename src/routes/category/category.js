import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import ProductCard from '../../Components/ProductCard/ProductCard';
import { CategoriesContext } from '../../contexts/categories';

import './category.scss';

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);
  const [products, setProducts] = useState(categoriesMap[category]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap]);

  return (
    <div className="category-container">
      {products?.map((product) => (
        <ProductCard
          key={`category-product-id-${product.id}`}
          product={product}
        />
      ))}
    </div>
  );
};

export default Category;
