import ProductList from "../components/product/ProductList";
import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../components/product/productQueries";

const HomePage = () => {
  const { isLoading, error, isError, data } = useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts(),
  });

  if (isLoading) return <h1>Loading...</h1>;
  if (isError) return <pre>{JSON.stringify(error)}</pre>;

  return (
    <main className="main container">
      <h1 className="mb-2">Our products</h1>
      <ProductList products={data} />
    </main>
  );
};

export default HomePage;
