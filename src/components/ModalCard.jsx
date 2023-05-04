import ReactDOM from "react-dom";
import '../CSS/modalCard.css';

function ModalCard({ children }) {
  return ReactDOM.createPortal(
    <div className="modal-background">{children}</div>,
    document.getElementById("modal")
  );
}

export default ModalCard;
