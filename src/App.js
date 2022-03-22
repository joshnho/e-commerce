import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/navbar/navbar';
import Home from './Routes/home/home';
import Signin from './Routes/auth/signin';

const Shop = () => {
  return <h1>Shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="signin" element={<Signin />} />
      </Route>
    </Routes>
  );
};

export default App;
