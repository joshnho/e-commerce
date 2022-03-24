import './category-item.scss';

const CategoryItem = ({ category: { title, imageUrl } }) => {
  return (
    <div className="category-container">
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />
      <div className="category-body-container">
        <h2>{title.toUpperCase()}</h2>
        {/* <h2>{title[0].toUpperCase() + title.slice(1).toLowerCase()}</h2> */}
        <p>SHOP NOW</p>
      </div>
    </div>
  );
};

export default CategoryItem;
