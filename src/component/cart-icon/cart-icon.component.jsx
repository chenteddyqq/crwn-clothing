import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";

import { selectCartItemsCount } from "../../redux/cart/cart.selector";
import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.style.scss";

const CartIcon = ({ toggleCartHidden, itemCount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemCount}</span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    itemCount: selectCartItemsCount(state)
  };
};

const mapDispatchToProps = dispatchs => ({
  toggleCartHidden: () => dispatchs(toggleCartHidden())
});

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
