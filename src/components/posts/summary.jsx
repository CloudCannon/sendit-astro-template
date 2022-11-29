export default function PostSummary({ post }) {
  return (
    <>
      <div className="col-lg-4 col-md-6">
        <article className="blog-post">
          <div className="blog-post-thumb">
            <a href={`/blog/${post.slug}`}>
              <img
                src={post.data.thumbImg.image}
                alt={post.data.thumbImg.image_alt}
                loading="lazy"
              />
            </a>
          </div>
          <div className="blog-post-content">
            <div className="blog-post-tag @@category">
              {post.data.tags.slice(0, 2).map((tag, i) => (
                <a href={`/tags/${tag.toLowerCase()}`} key={i}>
                  ({tag})
                </a>
              ))}
            </div>
            <div className="blog-post-title">
              <a href={`/blog/${post.slug}`}>{post.data.title}</a>
            </div>
          </div>
        </article>
      </div>
    </>
  );
}
