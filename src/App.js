import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './routes/home/home';
import Auth from './routes/auth/auth';

const Shop = () => {
  return <h1>Shop</h1>;
};

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shop" element={<Shop />} />
        <Route exact path="/login" element={<Auth />} />
      </Routes>
    </>
  );
};

export default App;
