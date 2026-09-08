import Eyebrow from "../components/common/Eyebrow";
import SolutionCard from "../components/solutions/SolutionCard";
import { SOLUTIONS } from "../data/solutions";

export default function SolutionsPage() {
  return (
    <section className="block" id="solusi">
      <div className="wrap">
        <div className="block-head">
          <div>
            <Eyebrow>Solusi</Eyebrow>
            <h1>Solusi Printing Berdasarkan Kebutuhan Industri</h1>
          </div>
          <p>
            Solusi yang disesuaikan dengan kebutuhan operasional dan karakter
            setiap sektor bisnis.
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
 