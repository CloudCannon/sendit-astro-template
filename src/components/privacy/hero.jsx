export default function PrivacyHero( {block, dataBinding}) {
	return (
        <section className="privacy-hero" data-cms-bind={dataBinding}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="privacy-hero-content text-center">
                        <h1>{block.title}</h1>
                        </div>
                    </div>
                </div>
            </div>
        </section>
	);
}
