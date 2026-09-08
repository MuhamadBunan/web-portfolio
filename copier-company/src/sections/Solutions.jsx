{/* ================= SOLUTIONS ================= */}
import Eyebrow from "../components/common/Eyebrow";
import SolutionCard from "../components/solutions/SolutionCard";
import { SOLUTIONS } from "../data/solutions";

export default function Solutions() {
  return (
    <section className="block alt" id="solusi">
      <div className="wrap">
        <div className="block-head">
          <div>
            <Eyebrow>Solusi</Eyebrow>
            <h2>Dirancang per Industri, Bukan Generik</h2>
          </div>

          <p>
            Setiap sektor punya pola pemakaian berbeda — solusi kami
            disesuaikan, bukan dipaksakan.
          </p>
        </div>

        <div className="grid-solutions">
          {SOLUTIONS.map((solution) => (
            <SolutionCard key={solution.name} solution={solution} />
          ))}
        </div>
      </div>
    </section>
  );
}