import products from "./products";
import Navbar from "./components/Navbar";
import ProductGrid from "./components/ProductGrid";

const App = () => {
  return (
    <>
      <Navbar total={products.length} />
      <ProductGrid products={products} />
    </>
  );
};

export default App;
