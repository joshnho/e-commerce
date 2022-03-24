import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { signOutUser } from '../../utils/firebase/firebase.utils';

import { UserContext } from '../../contexts/user';
import { CartContext } from '../../contexts/cart';

import { ReactComponent as CrwnLogo } from '../../assets/images/crown.svg';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

import './navbar.scss';

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <>
      <div className="navbar">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="navbar-links-container">
          <Link className="navbar-link" to="/shop">
            SHOP
          </Link>
          {currentUser ? (
            <Link className="navbar-link" to="login" onClick={signOutUser}>
              Logout
            </Link>
          ) : (
            <Link className="navbar-link" to="/login">
              LOGIN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
    </>
  );
};

export default Navbar;
