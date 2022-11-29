import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function PrivacyPrivacy({ block, dataBinding }) {
  const handleClick = (event) => {
    console.log("click navlink");
    Array.from(document.querySelectorAll(".privacy-nav .nav-link")).forEach(
      (element) => {
        element.classList.remove("active");
      }
    );
    event.currentTarget.classList.add("active");
  };
  return (
    <section className="privacy" data-cms-bind={dataBinding}>
      <div className="container">
        <div className="row">
          <div className="privacy-wrapper">
            <div className="col-lg-7 mx-auto">
              <div
                data-bs-spy="scroll"
                data-bs-target="#navbar-example2"
                data-bs-offset="0"
                className="scrollspy-example"
                tabIndex="0"
              >
                {block.terms_and_conditions.map((privacy, i) => (
                  <>
                    <div className="privacy-items" id={`item${i + 1}`} key={i}>
                      <div className="card">
                        <h3
                          className="sub-title"
                          style={{
                            "padding-top": "40px",
                            "margin-top": "-40px",
                          }}
                        >
                          {privacy.heading}
                        </h3>
                        <div className="card-body">
                          <div
                            className="card-text"
                            dangerouslySetInnerHTML={{
                              __html: md.render(privacy.description),
                            }}
                          />
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
            <div className="col-lg-4">
              <nav id="scrol-nav" className="navbar navbar-light privacy-nav">
                <ul className="nav nav-pills">
                  {block.terms_and_conditions.map((privacy, i) => (
                    <>
                      <li className="nav-item" key={i}>
                        <a href={`#item${i + 1}`} onClick={handleClick}>
                          {privacy.heading}
                        </a>
                      </li>
                    </>
                  ))}
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
