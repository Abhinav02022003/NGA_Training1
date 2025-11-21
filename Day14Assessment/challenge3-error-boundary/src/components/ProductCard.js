export default function ProductCard({ product }) {
  if (!product.name) {
    throw new Error("Product name missing!");
  }

  return (
    <div style={{ border: "1px solid black", padding: 20 }}>
      <h3>{product.name}</h3>
      <p>Price: ₹{product.price}</p>
    </div>
  );
}
