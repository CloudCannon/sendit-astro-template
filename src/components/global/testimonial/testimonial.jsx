import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function GlobalTestimonial(block) {
  return (
    <section className="testimonial">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 mx-auto text-center mb-5">
            <div className="testimonial-content">
              <h2>
                {block.title} <span> {block.title_suffix}</span>
              </h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: md.render(block.description),
                }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          {block.slider.map((slide, i) => (
            <Testimonial slide={slide} i={i} key={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
function Testimonial({ slide, i }) {
  return (
    <div className="col-lg-4 col-md-6 mb-5" key={i}>
      <div className="testimonial-item">
        <div className="testimonial-item-person">
          <div className="thumb">
            <img
              src={slide.image}
              alt="logo"
              className={slide.image_alt}
              loading="lazy"
            />
          </div>
          <div className="content">
            <h3>{slide.author}</h3>
            <p>{slide.designation}</p>
          </div>
        </div>
        <p>{slide.message}</p>
      </div>
    </div>
  );
}
