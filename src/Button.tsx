import { ReactNode } from "react";

interface Props {
  /**
   * The HTML elements to display as the button text.
   */
  children: ReactNode;
  /**
   * The bootstrap type suffix.
   */
  type: "primary" | "secondary" | "success" | "danger";
  /**
   * The onClick handler.
   */
  onClick: () => void;
}

export default function Button({ children, type, onClick }: Props) {
  return (
    <button type="button" className={"btn btn-" + type} onClick={onClick}>
      {children}
    </button>
  );
}
