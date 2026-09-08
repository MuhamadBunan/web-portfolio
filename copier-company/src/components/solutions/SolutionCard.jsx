import { ArrowRight } from "lucide-react";

function SolutionCard({ solution }) {
  const Icon = solution.icon;

  return (
    <article className="solution-card">
      <div className="icon-wrap">
        <Icon size={20} />
      </div>

      <span className="solution-card__eyebrow">SOLUTION</span>

      <h3>{solution.name}</h3>

      <p>{solution.desc}</p>

      <a href="#" className="solution-card__link">
        Lihat Solusi
        <ArrowRight size={16} />
      </a>
    </article>
  );
}

export default SolutionCard;