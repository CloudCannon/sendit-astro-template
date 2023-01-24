export default function PricingTier({ tier, dataBinding }) {
  let pricing = "";
  if (tier.has_discount) {
    pricing = (
      <>
        <div className="price">
          <p className="pricingtable">
            {tier.currency_symbol}
            {tier.discount_price}
          </p>
          <div className="discount">
            <p>
              {tier.currency_symbol}
              {tier.price}
            </p>
            <div className="vector vector-one">
              <img
                src="/images/pricing/Vector1.svg"
                alt="Vector"
                loading="lazy"
              />
            </div>
          </div>
          <div className="shape-two top-0"></div>
        </div>
      </>
    );
  } else {
    pricing = (
      <>
        <div className="price">
          <p>
            <span>
              {tier.currency_symbol}
              {tier.price}
            </span>
          </p>
          <div className="shape-one"></div>
        </div>
      </>
    );
  }
  return (
    <div className="col-lg-4" data-cms-bind={dataBinding}>
      <div
        className={`card pricing-item ${tier.highlight_tier ? "active" : ""}`}
      >
        <h5 className="card-title">{tier.tier}</h5>
        <p className="card-text">{tier.description}</p>
        {pricing}
        <div className="card-body">
          <ul className="list-unstyled">
            {tier.features.map((feature, i) => (
              <li key={i} className={feature.active_feature ? "" : "deactive"}>
                <i
                  className={`ph-check ${
                    feature.active_feature ? "" : "deactive"
                  }`}
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
