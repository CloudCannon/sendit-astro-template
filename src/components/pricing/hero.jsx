import MarkdownIt from 'markdown-it';
const md = new MarkdownIt({ html: true });

export default function PricingHero( {block, dataBinding}) {
	return (
        <section className="pricing-inner @@bg-color" data-cms-bind={dataBinding}>
            <div className="container">
                <div className="row">
                <div className="col-lg-8 mx-auto">
                    <div className="section-header position-relative text-center">
                    <h2>{block.title}</h2>
                    <div dangerouslySetInnerHTML={{ __html: md.render(block.description) }}/>
                    </div>
                </div>
                </div>
            </div>
        </section>
	);
}
