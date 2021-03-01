import React from "react";

const Articles = ({title, description , image, publishedAt , source , url}) => {
  return (
    <article className="col-12 col-md-6 tm-post">
      <hr className="tm-hr-primary" />
      <a href={url} className="effect-lily tm-post-link tm-pt-60">
        <div className="tm-post-link-inner">
          <img src={image} alt="..." className="img-fluid"/>
        </div>
        <span className="position-absolute tm-new-badge">New</span>
        <h2 className="tm-pt-30 tm-color-primary tm-post-title">
          {title}
        </h2>
      </a>
      <p className="tm-pt-30">
        {description}
      </p>
      <div className="d-flex justify-content-between tm-pt-45">
        <span className="tm-color-primary">{source}</span>
        <span className="tm-color-primary">{publishedAt}</span>
      </div>
      <hr />
      <div className="d-flex justify-content-between">
        <span>36 comments</span>
        <span>by Admin Anas</span>
      </div>
    </article>
  );
};

export default Articles;
