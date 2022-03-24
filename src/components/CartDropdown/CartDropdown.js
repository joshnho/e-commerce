import Button from '../Button/Button';

import './cart-dropdown.scss';

const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items" />
      <Button buttonType="">Checkout</Button>
    </div>
  );
};

export default CartDropdown;
