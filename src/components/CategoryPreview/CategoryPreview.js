import ProductCard from '../ProductCard/ProductCard';

import './category-preview.scss';

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <span className="title">{title?.toUpperCase()}</span>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard
              key={`preview-product-id-${product.id}`}
              product={product}
            />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
