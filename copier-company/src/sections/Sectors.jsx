{/* ================= SECTORS STRIP ================= */}
import { SECTORS } from "../data/sectors";

export default function Sectors() {
  return (
    <div className="sectors">
      <div className="wrap">
        <div className="sectors-row">
          <span className="sectors-label mono">Melayani sektor:</span>

          {SECTORS.map((sector) => (
            <span className="chip" key={sector.label}>
              <sector.icon size={14} />
              {sector.label}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}