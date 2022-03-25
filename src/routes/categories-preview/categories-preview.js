import { Fragment, useContext } from 'react';

import CategoryPreview from '../../Components/CategoryPreview/CategoryPreview';
import { CategoriesContext } from '../../contexts/categories';

const CategoriesPreview = () => {
  const { categoriesMap } = useContext(CategoriesContext);

  return (
    <Fragment>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview
            key={`shop-product-preview-title-${title}`}
            title={title}
            products={products}
          />
        );
      })}
    </Fragment>
  );
};

export default CategoriesPreview;
