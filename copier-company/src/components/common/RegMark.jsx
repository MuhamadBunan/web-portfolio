export default function RegMark({ className = "" }) {
  return (
    <svg
      className={`reg-mark ${className}`}
      width="18"
      height="18"
      viewBox="0 0 18 18"
      aria-hidden="true"
    >
      <circle
        cx="9"
        cy="9"
        r="7"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      />

      <line
        x1="9"
        y1="0"
        x2="9"
        y2="18"
        stroke="currentColor"
        strokeWidth="1"
      />

      <line
        x1="0"
        y1="9"
        x2="18"
        y2="9"
        stroke="currentColor"
        strokeWidth="1"
      />
    </svg>
  );
}