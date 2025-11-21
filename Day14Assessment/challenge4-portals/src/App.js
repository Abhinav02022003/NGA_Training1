import { useState } from "react";
import Modal from "./components/Modal";

function App() {
  const [open, setOpen] = useState(false);

  return (
    <div style={{ padding: 20 }}>
      <h1>React Portals Demo</h1>

      <button onClick={() => setOpen(true)}>Open Modal</button>

      {open && (
        <Modal onClose={() => setOpen(false)}>
          <h2>Hello from Portal!</h2>
          <p>This appears above everything.</p>
        </Modal>
      )}
    </div>
  );
}

export default App;
