import FaqItem from "./faqItem";
import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function GlobalFaq(block) {
  return (
    <section className="faq-two">
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div className="section-header">
              <h2>
                {block.title} <span>{block.title_suffix}</span>
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
          <div className="col-lg-12">
            <div className="accordion" id="accordionExample">
              {block.FAQ.map((q, i) => (
                <FaqItem faq={q} i={i} key={i} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
