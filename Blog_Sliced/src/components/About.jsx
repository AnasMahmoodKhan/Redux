import React from "react";
import Footer from "./Footer";

const About = () => {
  return (
    <div className="container-fluid">
      <main className="tm-main">
        <div className="row tm-row tm-mb-45">
          <div className="col-12">
            <hr className="tm-hr-primary tm-mb-55" />
            <img src="img/about-01.jpg" alt="..." className="img-fluid" />
          </div>
        </div>
        <div className="row tm-row tm-mb-40">
          <div className="col-12">
            <div className="mb-4">
              <h2 className="pt-2 tm-mb-40 tm-color-primary tm-post-title">
                About this xtra blog
              </h2>
              <p>
                You can immediately download
                <a rel="nofollow" href="/" target="_blank">
                  Xtra Blog Template
                </a>
                from TemplateMo website for 100% free of charge. Etiam vehicula,
                tortor ac eleifend tincidunt, diam neque pellentesque ipsum, a
                geugiat eros mauris eget lorem. Quisque in bibendum elit, in
                egestas turpis. Vestibulum ornare sollicitudin congue. Aliquam
                lorem mi, maximus at iaculis ut, viverra vel mauris. Duis congue
                luctus metus, sodales tincidunt lectus fringilla ut. Nunc tempus
                at magna sed vestibulum.
              </p>
              <p>
                Proin et arcu ligula. Praesent quis erat eu est solliditudin
                tristique ut in arcu. Donec bibendum ex id ligula semper dictum.
                Proin malesuada luctus auctor. Suspendisse ullamcorper, mi vel
                molestie ornare, arcu magna euismod ipsum, in malesuada nulla
                magna ut enim. Morbi lacinia magna sed sapien auctor, vitae
                luctus nunc cursus.
              </p>
            </div>
          </div>
        </div>
        <div className="row tm-row tm-mb-120">
          <div className="col-lg-4 tm-about-col">
            <div className="tm-bg-gray tm-about-pad">
              <div className="text-center tm-mt-40 tm-mb-60">
                <i className="fas fa-bezier-curve fa-4x tm-color-primary"></i>
              </div>
              <h2 className="mb-3 tm-color-primary tm-post-title">Background</h2>
              <p className="mb-0 tm-line-height-short">
                Phasellus pulvinar nisl ornare leo porttitor, et vestibulum
                lorem semper. Duis risus ex, molestie sit amet magna in,
                pharetra pellentesque est. Curabitur elit metus.
              </p>
            </div>
          </div>
          <div className="col-lg-4 tm-about-col">
            <div className="tm-bg-gray tm-about-pad">
              <div className="text-center tm-mt-40 tm-mb-60">
                <i className="fas fa-users-cog fa-4x tm-color-primary"></i>
              </div>
              <h2 className="mb-3 tm-color-primary tm-post-title">Teamwork</h2>
              <p className="mb-0 tm-line-height-short">
                Suspendisse ullamcorper, mi vel molestie ornare, arcu magna
                euismod ipsum, in malesuada nulla magna ut enim. Morbi lacinia
                magna sed auctor, vitae nunc cursus.
              </p>
            </div>
          </div>
          <div className="col-lg-4 tm-about-col">
            <div className="tm-bg-gray tm-about-pad">
              <div className="text-center tm-mt-40 tm-mb-60">
                <i className="fab fa-creative-commons-sampling fa-4x tm-color-primary"></i>
              </div>
              <h2 className="mb-3 tm-color-primary tm-post-title">
                Our Core Value
              </h2>
              <p className="mb-0 tm-line-height-short">
                Nunc mi ante, suscipit vel dapibus et, volutpat sit amet ante.
                In tempor nec sem vitae varius. Aliquam tincidunt orci sem, et
                imperdiet massa consectetur nec.
              </p>
            </div>
          </div>
        </div>
        <div className="row tm-row tm-mb-60">
          <div className="col-12">
            <hr className="tm-hr-primary tm-mb-55" />
          </div>
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default About;
