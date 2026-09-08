export default function ProductCard({ product }) {
  const Icon = product.icon;

  return (
    <div className="product-card">
      <div className="icon-wrap">
        <Icon size={20} />
      </div>

      <h3>{product.name}</h3>

      <span className="spec mono">
        {product.spec}
      </span>

      <p>{product.desc}</p>
    </div>
  );
}