import React from "react";
import { useFetch } from "./useFetch";

export default function Posts() {
  const { data, loading } = useFetch("https://jsonplaceholder.typicode.com/posts");

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Fetched Posts</h2>
      {data.slice(0, 5).map((post) => (
        <div key={post.id} style={{ marginBottom: "10px" }}>
          <strong>{post.title}</strong>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
}
