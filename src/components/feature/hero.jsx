import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function FeatureHero({ block, dataBinding }) {
  return (
    <section className="feature-hero" data-cms-bind={dataBinding}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6">
            <div className="feature-hero-content">
              <h1 className="">{block.title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: md.render(block.description),
                }}
              />
              <div className="d-block mb-6">
                {block.button && (
                  <a
                    href={block.button.link}
                    className="btn btn-primary btn-lg"
                  >
                    {" "}
                    {block.button.text}{" "}
                  </a>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="feature-hero-banner">
              <img src={block.image} alt={block.image_alt} loading="lazy" />
              <div className="shape">
                <img
                  src="/images/feature/effect-4.png"
                  alt="shape"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
