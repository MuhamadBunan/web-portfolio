import RegMark from "./RegMark";

export default function SectionFrame({
  children,
  className = "",
}) {
  return (
    <div className={`section-frame ${className}`}>
      <RegMark className="corner tl" />
      <RegMark className="corner tr" />
      <RegMark className="corner bl" />
      <RegMark className="corner br" />

      {children}
    </div>
  );
}