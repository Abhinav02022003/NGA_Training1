import ReactDOM from "react-dom";

export default function Modal({ children, onClose }) {
  return ReactDOM.createPortal(
    <div style={{
      position: "fixed",
      top: 0, left: 0,
      width: "100%",
      height: "100%",
      background: "rgba(0,0,0,0.6)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center"
    }}>
      <div style={{ background: "#fff", padding: 20 }}>
        {children}
        <button onClick={onClose} style={{ marginTop: 10 }}>Close</button>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
}
