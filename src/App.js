import { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Home from './routes/home/home';
import Login from './routes/login/login';
import Shop from './routes/shop/shop';
import Checkout from './routes/checkout/checkout';

const App = () => {
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/shop/*" element={<Shop />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/checkout" element={<Checkout />} />
      </Routes>
    </Fragment>
  );
};

export default App;
