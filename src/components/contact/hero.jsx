import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function ContactHero(block) {
  return (
    <section className="contact-hero">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="contact-hero-content">
              <h1>{block.title}</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: md.render(block.description),
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
