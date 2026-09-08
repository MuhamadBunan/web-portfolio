{/* ================= SERVICES ================= */}
import Eyebrow from "../components/common/Eyebrow";
import ServiceCard from "../components/services/ServiceCard";
import { SERVICES } from "../data/services";

export default function Services() {
  return (
    <section className="block" id="layanan">
      <div className="wrap">
        <div className="block-head">
          <div>
            <Eyebrow>Layanan</Eyebrow>
            <h2>Siklus Layanan Purna Jual</h2>
          </div>

          <p>
            Dukungan menyeluruh sejak unit terpasang hingga akhir masa pakainya.
          </p>
        </div>

        <div className="services-row">
          {SERVICES.map((service) => (
            <ServiceCard key={service.name} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}