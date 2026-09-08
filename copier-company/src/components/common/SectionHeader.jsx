import Eyebrow from "./Eyebrow";

export default function SectionHeader({
  eyebrow,
  title,
  description,
}) {
  return (
    <div className="block-head">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2>{title}</h2>
      </div>

      <p>{description}</p>
    </div>
  );
}