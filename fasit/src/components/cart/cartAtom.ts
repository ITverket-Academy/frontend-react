import { atomWithStorage } from "jotai/utils";

export type Size = "XXL" | "XL" | "L" | "M" | "S" | "XS";

export type Product = {
  id: number;
  name: string;
  details: string;
  price: number;
  image: string;
  size?: Size;
  category: "t-shirts" | "sweatshirts" | "jeans" | "shoes";
};

export type CartItem = Product & {
  quantity: number;
};

export const cartAtom = atomWithStorage<CartItem[]>("cart", []);
