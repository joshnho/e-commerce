import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/navbar';
import Home from './Routes/home/home';
import Auth from './Routes/auth/auth';

const Shop = () => {
  return <h1>Shop</h1>;
};

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navbar />}>
        <Route index element={<Home />} />
        <Route path="shop" element={<Shop />} />
        <Route path="login" element={<Auth />} />
      </Route>
    </Routes>
  );
};

export default App;
