import { ReactNode } from "react";

interface Props {
  /**
   * The HTML elements to display for the alert content.
   */
  children: ReactNode;
  /**
   * The bootstrap color suffix.
   */
  type:
    | "primary"
    | "secondary"
    | "success"
    | "danger"
    | "warning"
    | "info"
    | "dark"
    | "light";
  /**
   * The dismiss handler.
   */
  onDismiss: () => void;
}

export default function Alert({ children, type, onDismiss }: Props) {
  return (
    <div
      className={"alert alert-dismissible fade show alert-" + type}
      role="alert"
    >
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onDismiss}
      ></button>
    </div>
  );
}
