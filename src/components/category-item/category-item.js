import './category-item.scss';

const CategoryItem = ({ category: { title, imageUrl } }) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title[0].toUpperCase() + title.slice(1).toLowerCase()}</h2>
        <p>Shop Now</p>
      </div>
    </div>
  );
};

export default CategoryItem;
