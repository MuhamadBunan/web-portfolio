import RegMark from "./RegMark";

export default function Eyebrow({ children }) {
  return (
    <div className="eyebrow">
      <RegMark />
      <span>{children}</span>
    </div>
  );
}