
import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({ html: true });

export default function GlobalCounter( {block, dataBinding}) {
	return (
        <section
        className={`counter-up ${block.alternate_style ? 'counter-up-two pb-xxl-14 pb-lg-13': ''}`}
        id="counter-up"
        data-cms-bind={dataBinding}
        >
            <div className="container">
                <div className="row">
                <div className="col-lg-12">
                    <div className="section-header">
                    <h2>{block.title} <span>{block.title_suffix}</span></h2>
                    <div dangerouslySetInnerHTML={{ __html: md.render(block.description) }}/>
                    </div>
                </div>
                <div className="col-12">
                    <div className="counter-up-wrapper d-grid">
                        {block.numbers.map((number, i) => (
                            <div className="counter-up-content" key={i}>
                                <div className="counter-up-content-item">
                                <div className="counter-percent">
                                    { number.prefix && 
                                        <span className="percent">{number.prefix}</span>
                                    }
                                    
                                    <span className="counter">{number.number}</span>

                                    { number.suffix && 
                                        <span className="percent">{number.suffix}</span>
                                    }
                                </div>
                                <p>{number.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                </div>
            </div>
        </section>
	);
}
