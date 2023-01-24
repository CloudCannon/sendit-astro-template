import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function GlobalHeader({ block, dataBinding }) {
  return (
    <section className="feature pt-0 pb-0" data-cms-bind={dataBinding}>
      <div className="container">
        <div className="row">
          <div className="col-lg-8 mx-auto">
            <div
              className={`section-header @@disply ${
                block.remove_top_padding ? "no-top-pad" : ""
              }`}
            >
              <h2>
                {block.title}
                <span>{block.title_suffix}</span>
              </h2>
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
