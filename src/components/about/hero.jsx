import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function AboutHero({ block, dataBinding }) {
  const renderPlacer = (param) => {
    switch (param) {
      case "front_bottom":
        return "image-one";
      case "back_top_right":
        return "image-two";
      case "back_top_left":
        return "image-three";
      default:
        return "";
    }
  };

  return (
    <section className="about-hero-two" data-cms-bind={dataBinding}>
      <div className="container">
        <div className="row">
          <div className="col-xl-5 col-lg-10 mx-auto">
            <div className="about-hero-two-content position-relative">
              <h2>{block.title}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: md.render(block.description),
                }}
              />
              <div className="scroll-down d-flex justify-content-center justify-content-xl-start">
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
          <div className="col-xl-7 col-lg-12">
            <div className="about-hero-two-banner">
              {block.hero_images.map((image, i) => (
                <div className={`${renderPlacer(image.placement)}`} key={i}>
                  <img src={image.image} alt={image.image_alt} loading="lazy" />
                </div>
              ))}
              <div className="pattern"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
