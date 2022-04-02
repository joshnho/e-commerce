import { useNavigate } from 'react-router-dom';

import {
  CategoryHomeItemContainer,
  BackgroundImage,
  CategoryHomeItemBody,
} from './categoryHomeItem.styles';

const CategoryHomeItem = ({ category: { title, imageUrl, route } }) => {
  const navigate = useNavigate();

  const onNavigateHandle = () => navigate(route);

  return (
    <CategoryHomeItemContainer onClick={onNavigateHandle}>
      <BackgroundImage imageUrl={imageUrl} />
      <CategoryHomeItemBody>
        <h2>{title.toUpperCase()}</h2>
        <p>SHOP NOW</p>
      </CategoryHomeItemBody>
    </CategoryHomeItemContainer>
  );
};

export default CategoryHomeItem;
