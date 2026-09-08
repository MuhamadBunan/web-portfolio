
import Eyebrow from "../components/common/Eyebrow";
import ServiceCard from "../components/services/ServiceCard";
import { SERVICES } from "../data/services";

export default function ServicesPage() {
  return (
    <section className="block" id="layanan">
      <div className="wrap">
        <div className="block-head">
          <div>
            <Eyebrow>Layanan</Eyebrow>
            <h1>Layanan Purna Jual</h1>
          </div>
          <p>
            Dukungan teknis dan maintenance untuk menjaga perangkat tetap
            optimal sepanjang masa penggunaannya.
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
