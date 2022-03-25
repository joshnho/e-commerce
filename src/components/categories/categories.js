import CategoryHomeItem from '../CategoryHomeItem/CategoryHomeItem';

import './categories.scss';

const Categories = ({ categories }) => {
  return (
    <div className="directory-container">
      {categories.map((category) => (
        <CategoryHomeItem
          key={`category-id-${category.id}`}
          category={category}
        />
      ))}
    </div>
  );
};

export default Categories;
