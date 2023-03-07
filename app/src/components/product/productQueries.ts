import { Product } from "../cart/cartAtom";

export async function getProducts(): Promise<Product[]> {
  const res = await fetch("http://localhost:8080/products");

  const products: Product[] = await res.json();

  if (products) {
    return products;
  }
  return [];
}

export async function getProduct(
  id: string | undefined
): Promise<Product | undefined> {
  if (!id) return undefined;

  const res = await fetch(`http://localhost:8080/products/${id}`);

  const product: Product = await res.json();

  if (product) {
    return product;
  }
  return undefined;
}
