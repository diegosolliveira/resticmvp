import "../ButtonModal/style.css";

interface ButtonModalProps {
  label: string;
  className: string;
  onClick?: () => void;
}
export default function ButtonModal({ label, className, onClick}: ButtonModalProps) {
  return <button className={className} onClick={onClick}>{label}</button>;
}
