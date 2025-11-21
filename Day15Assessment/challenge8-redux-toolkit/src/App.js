import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "./features/products/productSlice";

function App() {
  const dispatch = useDispatch();
  const { items, loading } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div>
      <h1>Redux Toolkit Product List</h1>
      {loading && <p>Loading...</p>}

      {items.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
}

export default App;
