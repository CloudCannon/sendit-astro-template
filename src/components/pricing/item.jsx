export default function PricingTier({ tier }) {
  let pricing = "";
  if (tier.has_discount) {
    pricing = (
      <>
        <div className="price">
          <p className="pricingtable">${tier.discount_price}</p>
          <div className="discount">
            <p>${tier.price}</p>
            <div className="vector vector-one">
              <img
                src="/images/pricing/Vector1.svg"
                alt="Vector"
                loading="lazy"
              />
            </div>
          </div>
          <div className="shape top-0">
            <img
              src="/images/pricing/shape-two.png"
              alt="shape"
              loading="lazy"
            />
          </div>
        </div>
      </>
    );
  } else {
    pricing = (
      <>
        <div className="price">
          <p>
            <span>${tier.price}</span>
          </p>
          <div className="shape">
            <img
              src="/images/pricing/shape-one.png"
              alt="shape"
              loading="lazy"
            />
          </div>
        </div>
      </>
    );
  }
  return (
    <div className="col-lg-4">
      <div className={`card pricing-item ${tier.is_active ? "active" : ""}`}>
        <h5 className="card-title">{tier.tier}</h5>
        <p className="card-text">{tier.description}</p>
        {pricing}
        <div className="card-body">
          <ul className="list-unstyled">
            {tier.feature.map((feature, i) => (
              <li key={i} className={feature.is_active ? "" : "deactive"}>
                <i
                  className={`ph-check ${feature.is_active ? "" : "deactive"}`}
                ></i>
                {feature.item}
              </li>
            ))}
          </ul>
          <div className="link">
            {tier.button && (
              <a href={tier.button.link} className="btn btn-lg btn-white">
                {tier.button.text}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
