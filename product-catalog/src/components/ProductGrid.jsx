import ProductCard from "./ProductCard";
import CardWrapper from "./CardWrapper";

const ProductGrid = ({ products }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "20px",
        padding: "20px",
      }}
    >
      {products.map((product) => (
        <CardWrapper key={product.id}>
          <ProductCard {...product} />
        </CardWrapper>
      ))}
    </div>
  );
};

export default ProductGrid;
