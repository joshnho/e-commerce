import {
  CategoryHomeItemContainer,
  BackgroundImage,
  CategoryHomeItemBody,
} from './categoryHomeItem.styles';

const CategoryHomeItem = ({ category: { title, imageUrl } }) => {
  return (
    <CategoryHomeItemContainer>
      <BackgroundImage style={{ backgroundImage: `url(${imageUrl})` }} />
      <CategoryHomeItemBody>
        <h2>{title.toUpperCase()}</h2>
        <p>SHOP NOW</p>
      </CategoryHomeItemBody>
    </CategoryHomeItemContainer>
  );
};

export default CategoryHomeItem;
