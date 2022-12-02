export default function PostSummary({ post }) {
  const {
    frontmatter: { thumb_image, tags, title },
    url,
  } = post;
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <article className="blog-post">
          <div className="blog-post-thumb">
            <a href={url}>
              <img
                src={thumb_image.image}
                alt={thumb_image.image_alt}
                loading="lazy"
              />
            </a>
          </div>
          <div className="blog-post-content">
            <div className="blog-post-tag @@category">
              {tags.slice(0, 2).map((tag, i) => (
                <a href={`/tags/${tag.toLowerCase()}`} key={i}>
                  {tag[0].toUpperCase() + tag.slice(1)}
                </a>
              ))}
            </div>
            <div className="blog-post-title">
              <a href={url}>{title}</a>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
