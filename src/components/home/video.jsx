export default function HomeVideo({ block, dataBinding }) {
  return (
    <section
      className="video pb-xxl-22 pb-lg-18 pb-12"
      data-cms-bind={dataBinding}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <div className="banner">
              <div className="rounded-box">
                <img
                  src={block.image}
                  className="w-100"
                  alt={block.image_alt}
                  loading="lazy"
                />
              </div>
              <div className="effect-one"></div>
              <div className="effect-two"></div>
              <div className="video-iframe d-flex align-items-center justify-content-center">
                <div className="video-icon me-sm-9 me-8">
                  <a className="popup-vimeo" href={block.video_url}>
                    <svg
                      width="28"
                      height="32"
                      viewBox="0 0 28 32"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M26 12.5359C28.6667 14.0755 28.6667 17.9245 26 19.4641L6.5 30.7224C3.83333 32.262 0.499998 30.3375 0.499999 27.2583L0.5 4.74167C0.5 1.66247 3.83333 -0.262033 6.5 1.27757L26 12.5359Z"
                        fill="white"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
