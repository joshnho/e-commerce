import CategoryHomeItem from '../CategoryHomeItem/CategoryHomeItem';

// Replace div with this for alternate styling
// import { CategoryHomeContainer } from './categoriesHome.styles.js';

const CategoriesHome = () => {
  const categories = [
    {
      id: 1,
      title: 'hats',
      imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
    },
    {
      id: 2,
      title: 'jackets',
      imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
    },
    {
      id: 3,
      title: 'sneakers',
      imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
    },
    {
      id: 4,
      title: 'womens',
      imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
    },
    {
      id: 5,
      title: 'mens',
      imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
    },
  ];

  return (
    <div>
      {categories.map((category) => (
        <CategoryHomeItem
          key={`category-id-${category.id}`}
          category={category}
        />
      ))}
    </div>
  );
};

export default CategoriesHome;
