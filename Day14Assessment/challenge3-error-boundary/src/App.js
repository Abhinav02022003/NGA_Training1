import ErrorBoundary from "./components/ErrorBoundary";
import ProductCard from "./components/ProductCard";

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Error Boundary Demo</h1>

      <ErrorBoundary>
        <ProductCard product={{ name: "Laptop", price: 50000 }} />
      </ErrorBoundary>

      <ErrorBoundary>
        {/* This one crashes */}
        <ProductCard product={{ price: 20000 }} />
      </ErrorBoundary>
    </div>
  );
}

export default App;
