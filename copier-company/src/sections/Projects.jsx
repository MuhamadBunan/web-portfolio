{/* ================= PROJECTS ================= */}
import Eyebrow from "../components/common/Eyebrow";
import { PROJECTS } from "../data/projects";

export default function Projects() {
  return (
    <section className="block alt" id="proyek">
      <div className="wrap">
        <div className="block-head">
          <div>
            <Eyebrow>Proyek &amp; Klien</Eyebrow>
            <h2>Dipercaya untuk Implementasi Skala Besar</h2>
          </div>

          <p>
            Sebagian pekerjaan yang telah kami selesaikan bersama klien
            korporat dan institusi.
          </p>
        </div>

        <div className="project-list">
          {PROJECTS.map((project) => (
            <div className="project-row" key={project.name}>
              <span className="tag">{project.sector}</span>
              <h4>{project.name}</h4>
              <span className="scope">{project.scope}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}