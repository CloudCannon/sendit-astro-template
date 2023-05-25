import PricingItem from "./item";

export default function PricingTable(block) {
  return (
    <section className="pricing pb-xxl-20 pb-lg-15 pb-md-5">
      <div className="container">
        <div className="row">
          {block.pricing_tier.map((tier, i) => (
            <PricingItem tier={tier} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
