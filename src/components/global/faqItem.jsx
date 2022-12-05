import MarkdownIt from "markdown-it";
const md = new MarkdownIt({ html: true });

export default function GlobalFaqItem({ faq, i, dataBinding }) {
  const handleClick = (event) => {
    var current = document.getElementsByClassName("shows");
    if (current[0]) {
      current[0].classList.remove("shows");
    }
    event.currentTarget.parentNode.classList.add("shows");
  };

  return (
    <div
      className={`accordion-item ${i === 0 ? "shows" : ""}`}
      data-cms-bind={dataBinding}
    >
      <span>0{i + 1}</span>
      <h2 className="accordion-header" id={`heading${i}`} onClick={handleClick}>
        <button
          className={`accordion-button ${i === 0 ? "" : "collapsed"}`}
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#collapse${i}`}
          aria-expanded={i === 0 ? "true" : "false"}
          aria-controls={`collapse${i}`}
          onClick={handleClick}
        >
          <p className="header-content">{faq.title}</p>
        </button>
      </h2>
      <div
        id={`collapse${i}`}
        className={`accordion-collapse collapse ${i === 0 ? "show" : ""}`}
        aria-labelledby={`heading${i}`}
        data-bs-parent="#accordionExample"
      >
        <div
          className="accordion-body"
          dangerouslySetInnerHTML={{ __html: md.render(faq.description) }}
        ></div>
      </div>
    </div>
  );
}
