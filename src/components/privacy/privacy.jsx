import MarkdownIt from "markdown-it";
import { useRef } from "react";
import { Scrollspy } from "@makotot/ghostui";
const md = new MarkdownIt({ html: true });

export default function PrivacyPrivacy({ block, dataBinding }) {
  const sectionRefs = [];
  block.terms_and_conditions.map((privacy, i) =>
    sectionRefs.push(useRef(null))
  );
  const handleClick = (event) => {
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
          <Scrollspy sectionRefs={sectionRefs} offset={-90}>
            {({ currentElementIndexInViewport }) => (
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
                      <div
                        className="privacy-items"
                        id={`item${i + 1}`}
                        key={i}
                        ref={sectionRefs[i]}
                      >
                        <div className="card">
                          <h3 className="sub-title">{privacy.heading}</h3>
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
                    ))}
                  </div>
                </div>
                <div className="col-lg-4">
                  <nav
                    id="scrol-nav"
                    className="navbar navbar-light privacy-nav"
                  >
                    <ul className="nav nav-pills">
                      {block.terms_and_conditions.map((privacy, i) => (
                        <li className="nav-item" key={i}>
                          <a
                            href={`#item${i + 1}`}
                            onClick={handleClick}
                            className={`nav-link ${
                              currentElementIndexInViewport === i
                                ? "active"
                                : ""
                            }`}
                          >
                            {privacy.heading}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </Scrollspy>
        </div>
      </div>
    </section>
  );
}
