export default function GlobalLogin({ block, dataBinding }) {
  return (
    <section
      className="sing-up pt-md-20 pt-18 pb-md-20 pb-10"
      data-cms-bind={dataBinding}
    >
      <div className="container">
        <div className="row">
          <div className="col-xxl-7 col-lg-8 mx-auto">
            <div className="sing-up-body">
              <h2>{block.title}</h2>
              <form className="sing-up-items row gy-4 gx-3">
                <div className="col-md-12">
                  <label for="fullName" className="form-label">
                    {block.fullname.heading}
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="fullName"
                    placeholder={block.fullname.placeholder}
                  />
                </div>
                <div className="col-md-12">
                  <label for="pEmailId" className="form-label">
                    {block.email.heading}
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="pEmailId"
                    placeholder={block.email.placeholder}
                  />
                </div>
                <div className="col-6">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" for="gridCheck">
                      {block.checkbox_text}
                    </label>
                  </div>
                </div>
                <div className="col-6">
                  <div className="form-check ps-0  text-end">
                    <label className="form-check-label" for="gridCheck">
                      <a href="#" className="forget-password">
                        {" "}
                        Forget Password
                      </a>
                    </label>
                  </div>
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btn btn-submit  w-100">
                    {block.log_in_button.text}
                  </button>
                </div>
                <div className="col-md-12 mt-3">
                  <label for="" className="d-block text-center mb-0">
                    or
                  </label>
                </div>
                <div className="button-group">
                  <button
                    type="submit"
                    className="btn btn-submit btn-social w-100"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M15.9649 17.0524C14.3566 18.4107 12.2703 19.2728 9.99918 19.2728C6.61971 19.2728 3.65312 17.411 2.04492 14.6944L2.647 11.919L5.31573 11.4236C5.93512 13.423 7.80412 14.89 9.99918 14.89C11.0641 14.89 12.0529 14.5531 12.8679 13.9555L15.4324 14.3467L15.9649 17.0524Z"
                        fill="white"
                      />
                      <path
                        d="M15.9657 17.0523L15.4332 14.3465L12.8688 13.9553C12.0538 14.553 11.0649 14.8898 10 14.8898V19.2727C12.2711 19.2727 14.3575 18.4106 15.9657 17.0523Z"
                        fill="white"
                      />
                      <path
                        d="M5.10938 9.99998C5.10938 10.4998 5.18544 10.9779 5.31584 11.4235L2.04503 14.6943C1.23004 13.3251 0.726562 11.7168 0.726562 9.99998C0.726562 8.28304 1.23004 6.67484 2.04503 5.30566L4.67012 5.75746L5.31584 8.57647C5.18544 9.02196 5.10938 9.50009 5.10938 9.99998Z"
                        fill="white"
                      />
                      <path
                        d="M19.2711 9.99996C19.2711 12.8252 17.9636 15.3571 15.9641 17.0523L12.8672 13.9554C13.4974 13.4989 14.0299 12.8904 14.3776 12.1733H9.9984C9.6941 12.1733 9.45508 11.9342 9.45508 11.6299V8.36998C9.45508 8.06569 9.6941 7.82666 9.9984 7.82666H18.5757C18.8365 7.82666 19.0647 8.01135 19.1081 8.27215C19.2168 8.83724 19.2711 9.424 19.2711 9.99996Z"
                        fill="white"
                      />
                      <path
                        d="M14.3792 12.1733C14.0315 12.8904 13.499 13.4989 12.8688 13.9554L15.9657 17.0523C17.9652 15.3571 19.2727 12.8252 19.2727 9.99996C19.2727 9.424 19.2184 8.83724 19.1097 8.27215C19.0663 8.01135 18.838 7.82666 18.5772 7.82666H10V12.1733H14.3792Z"
                        fill="white"
                      />
                      <path
                        d="M16.117 3.3171C16.1279 3.46923 16.0627 3.61053 15.9649 3.71916L13.6395 6.03372C13.4548 6.22932 13.1505 6.25105 12.9332 6.08805C12.0746 5.44697 11.0641 5.11011 9.99918 5.11011C7.80412 5.11011 5.93512 6.57705 5.31573 8.57651L2.04492 5.3057C3.65312 2.58908 6.61971 0.727295 9.99918 0.727295C12.1616 0.727295 14.2697 1.52417 15.9214 2.91504C16.0409 3.01288 16.1061 3.16497 16.117 3.3171Z"
                        fill="white"
                      />
                      <path
                        d="M12.9339 6.08805C13.1513 6.25109 13.4555 6.22932 13.6402 6.03372L15.9657 3.71916C16.0635 3.61053 16.1287 3.46927 16.1178 3.3171C16.1069 3.16494 16.0417 3.01288 15.9222 2.91504C14.2705 1.52417 12.1624 0.727295 10 0.727295V5.11011C11.0649 5.11011 12.0755 5.44697 12.9339 6.08805Z"
                        fill="white"
                      />
                    </svg>
                    Sign In with Google
                  </button>
                  <button
                    type="submit"
                    className="btn btn-submit btn-social w-100"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M11.9 28.9508V19.0996H8.19995V14.6996H12V11.4996C12 7.59961 14.4 5.59961 17.7 5.59961C19.3 5.59961 20.7 5.69961 21.1 5.79961V9.79961H18.7999C16.9 9.69961 16.5 10.5996 16.5 11.7996V14.5996H21L20.4 18.9996H16.5V29.0775C23.6656 28.1463 29.2 22.0195 29.2 14.6C29.2 6.53664 22.6634 0 14.6 0C6.53664 0 0 6.53664 0 14.6C0 21.7409 5.12653 27.6844 11.9 28.9508Z"
                        fill="white"
                      />
                    </svg>
                    Sign In with FaceBook
                  </button>
                </div>
                <div className="divider mt-9"></div>
                <div className="col-md-12">
                  <a
                    href={block.sign_up_button.link}
                    className="create-account"
                  >
                    {block.sign_up_button.text}
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
