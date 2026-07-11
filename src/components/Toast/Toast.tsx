import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceFrown } from "@fortawesome/free-solid-svg-icons";
import "./Toast.css";

// Props for the Toast component
interface ToastProps {
  message: string;
  onClose: () => void;
  duration?: number;
}

// Duration for the exit animation in milliseconds
const EXIT_ANIMATION_MS = 300;

// Toast component that displays a message and automatically closes after some time
const Toast = ({ message, onClose, duration = 4500 }: ToastProps) => {
  const [isClosing, setIsClosing] = useState(false);

  const handleClose = () => setIsClosing(true);

  useEffect(() => {
    const timer = setTimeout(handleClose, duration);
    return () => clearTimeout(timer);
  }, [duration]);

  // Trigger the onClose callback after the exit animation completes
  useEffect(() => {
    if (!isClosing) return;
    const timer = setTimeout(onClose, EXIT_ANIMATION_MS);
    return () => clearTimeout(timer);
  }, [isClosing, onClose]);

  // Render the toast with a closing animation if isClosing is true
  return (
    <div className={`toast${isClosing ? " toast-closing" : ""}`} role="status">
      <FontAwesomeIcon icon={faFaceFrown} className="toast-icon" />
      <span className="toast-message">{message}</span>
    </div>
  );
};

export default Toast;
