export default function ServiceCard({ service }) {
  const Icon = service.icon;

  return (
    <article className="service-cell">
      <Icon size={22} />

      <h4>{service.name}</h4>

      <p>{service.desc}</p>
    </article>
  );
}