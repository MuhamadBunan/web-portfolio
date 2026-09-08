
import Eyebrow from "../components/common/Eyebrow";
import { PROJECTS } from "../data/projects";

export default function ProjectsPage() {
  return (
    <section className="block" id="proyek">
      <div className="wrap">
        <div className="block-head">
          <div>
            <Eyebrow>Proyek &amp; Klien</Eyebrow>
            <h1>Implementasi untuk Berbagai Skala Organisasi</h1>
          </div>
          <p>
            Beberapa proyek dan implementasi yang telah kami kerjakan bersama
            perusahaan dan institusi.
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

