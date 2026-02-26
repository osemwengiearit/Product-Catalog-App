const ProductCard = ({ name, price, category, image, featured }) => {
  return (
    <div
      style={{
        border: featured ? "2px solid #F59E0B" : "1px solid #E5E7EB",
        padding: "16px",
        borderRadius: "8px",
        textAlign: "center",
      }}
    >
      <img src={image} alt={name} style={{ width: "100%" }} />
      <h3>{name}</h3>
      <p>${price.toFixed(2)}</p>
      <small>{category}</small>
    </div>
  );
};

export default ProductCard;
