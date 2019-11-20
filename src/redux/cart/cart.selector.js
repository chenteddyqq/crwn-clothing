import { createSelector } from "reselect";

//这个selector用来记录所有的Items,[]里面是和下面的cart，user这样对应的
const selectCart = state => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  cart => cart.cartItems
);

export const selectCartHidden = createSelector(
  [selectCart],
  cart => cart.hidden
);

//相当与把state里面的内容一层层的抽出来
export const selectCartItemsCount = createSelector(
  [selectCartItems],
  cartItems =>
    cartItems.reduce(
      (accumulate, cartItem) => accumulate + cartItem.quantity,
      0
    )
);

export const selectCartTotal = createSelector([selectCartItems], cartItems =>
  cartItems.reduce(
    (accumulate, cartItem) => accumulate + cartItem.quantity * cartItem.price,
    0
  )
);
