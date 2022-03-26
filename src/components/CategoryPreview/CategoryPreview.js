import ProductCard from '../ProductCard/ProductCard';

import {
  CategoryPreviewContainer,
  Title,
  Preview,
} from './categoryPreview.styles.js';

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <Title to={title}>{title?.toUpperCase()}</Title>
      </h2>
      <Preview>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard
              key={`preview-product-id-${product.id}`}
              product={product}
            />
          ))}
      </Preview>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
