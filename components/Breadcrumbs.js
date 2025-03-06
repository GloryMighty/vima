"use client";
const Breadcrumbs = ({ pageTitle }) => {
  return (
    <section
      className="tf__breadcrumbs"
      style={{ background: "url(images-webp/breadcrumb.webp)" }}
    >
      <div className="container h-100">
        <div className="row align-items-center h-100">
          <div className="tf__breadcrumbs_text d-sm-flex flex-wrap justify-content-between pt-5">
            <h5>{pageTitle}</h5>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Breadcrumbs;
