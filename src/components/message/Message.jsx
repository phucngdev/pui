import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  InfoIcon,
  SuccessIcon,
  WarningIcon,
  ErrorIcon,
  CloseIcon,
  LoadingIcon,
} from "../../icons";
import "./Message.css";

const Message = ({ content, type = "info", duration = 3, onClose }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (duration > 0) {
      const timer = setTimeout(() => {
        setVisible(false);
        onClose?.();
      }, duration * 1000);

      return () => clearTimeout(timer);
    }
  }, [duration, onClose]);

  const getIcon = () => {
    switch (type) {
      case "success":
        return <SuccessIcon color="#52c41a" />;
      case "warning":
        return <WarningIcon color="#faad14" />;
      case "error":
        return <ErrorIcon color="#ff4d4f" />;
      case "loading":
        return <LoadingIcon color="#1890ff" />;
      default:
        return <InfoIcon color="#1890ff" />;
    }
  };

  if (!visible) return null;

  return (
    <div className={`message message-${type}`}>
      <div className="message-content">
        <span className="message-icon">{getIcon()}</span>
        <span className="message-text">{content}</span>
      </div>
      {type !== "loading" && (
        <button className="message-close" onClick={() => setVisible(false)}>
          <CloseIcon size={14} />
        </button>
      )}
    </div>
  );
};

const messageContainer = {
  show: (props) => {
    const div = document.createElement("div");
    div.className = "message-container";
    document.body.appendChild(div);

    const root = createRoot(div);
    root.render(
      <Message
        {...props}
        onClose={() => {
          root.unmount();
          div.remove();
        }}
      />
    );
  },
};

const message = {
  info: (content, duration) => {
    messageContainer.show({ content, type: "info", duration });
  },
  success: (content, duration) => {
    messageContainer.show({ content, type: "success", duration });
  },
  warning: (content, duration) => {
    messageContainer.show({ content, type: "warning", duration });
  },
  error: (content, duration) => {
    messageContainer.show({ content, type: "error", duration });
  },
  loading: (content, duration) => {
    messageContainer.show({ content, type: "loading", duration });
  },
};

export default message;
