import { CartItem } from "../components/cart/cartAtom";

export const calculateTotalSum = (cart: CartItem[]) => {
  const totalSum = cart.reduce((acc: number, product: CartItem) => {
    return acc + product.price * product.quantity;
  }, 0);

  return totalSum;
};

export const calculateProductsWithQuantity = (
  price: number,
  quantity: number
) => {
  return price * quantity;
};
