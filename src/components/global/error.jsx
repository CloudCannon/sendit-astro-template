import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function GlobalError({ block, dataBinding }) {
  return (
    <section
      className="error py-xxl-12 py-lg-9 py-10 py-sm-6"
      data-cms-bind={dataBinding}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="error-content text-center">
              <img src={block.image} className="" alt={block.image_alt} />
              <h3
                className="my-5"
                dangerouslySetInnerHTML={{
                  __html: md.render(block.description),
                }}
              ></h3>
              <a href="/" className="btn btn-lg btn-primary">
                Try again
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
