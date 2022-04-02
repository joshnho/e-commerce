import { Fragment, useContext } from 'react';
import { signOutUser } from '../../utils/firebase/firebase';

import { UserContext } from '../../contexts/user';
import { CartContext } from '../../contexts/cart';

import { ReactComponent as CrwnLogo } from '../../assets/images/crown.svg';
import CartIcon from '../CartIcon/CartIcon';
import CartDropdown from '../CartDropdown/CartDropdown';

import {
  NavigationContainer,
  LogoContainer,
  NavbarLinks,
  NavLink,
} from './navbar.styles';

const Navbar = () => {
  const { currentUser } = useContext(UserContext);
  const { isCartOpen } = useContext(CartContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <CrwnLogo className="logo" />
        </LogoContainer>
        <NavbarLinks>
          <NavLink to="/shop">SHOP</NavLink>
          {currentUser ? (
            <NavLink as="span" to="/login" onClick={signOutUser}>
              LOGOUT
            </NavLink>
          ) : (
            <NavLink to="/login">LOGIN</NavLink>
          )}
          <CartIcon />
        </NavbarLinks>
        {isCartOpen && <CartDropdown />}
      </NavigationContainer>
    </Fragment>
  );
};

export default Navbar;
