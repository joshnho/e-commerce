import CategoryItem from '../category-item/category-item';

import './categories.scss';

const Categories = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryItem key={`category-id-${category.id}`} category={category} />
      ))}
    </div>
  );
};

export default Categories;
