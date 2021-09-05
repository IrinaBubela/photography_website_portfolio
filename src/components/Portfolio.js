import React from "react";

function Portfolio()  {
    return (
     <div className="portfolio">
        <section className="container section section-image-one-v">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-9 pd-md-1 pb-4">
              <img alt="portfolio-1" src={process.env.PUBLIC_URL + '/img/portfolio/DSC_2834.jpg'} className="img img-view lazyloaded" />
            </div>
          </div>
        </section>
        <section className="container section section-image-two-type-1">
          <div className="row justify-content-between">
            <div className="col-12 col-md-7 pb-4">
              <img alt="portfolio-3" src={process.env.PUBLIC_URL + '/img/portfolio/DSC_4253.jpg'} className="img img-view lazyloaded" />
            </div>
            <div className="col-12 col-md-5 pb-4">
              <img alt="portfolio-2" src={process.env.PUBLIC_URL + '/img/portfolio/DSC_2946.jpg'} className="img img-view lazyloaded" />
            </div>
          </div>
        </section>
        <section className="container section section-image-two-type-1">
          <div className="row justify-content-between">
            <div className="col-12 col-md-5 pb-4">
              <img src={process.env.PUBLIC_URL + '/img/portfolio/DSC_4303.jpg'} className="img img-view lazyloaded" />
            </div>
            <div className="col-12 col-md-7 pb-4">
              <img src={process.env.PUBLIC_URL + '/img/portfolio/DSC_5888.jpg'} className="img img-view lazyloaded" />
            </div>
          </div>
        </section>
        <section className="container section section-image-three">
          <div className="row justify-content-between">
            <div className="col-12 col-md-4 pb-4 pb-md-1">
              <img src={process.env.PUBLIC_URL + '/img/portfolio/DSC_6008.jpg'} className="img img-view lazyloaded" />
            </div>
            <div className="col-12 col-md-4 pb-4 pb-md-1">
              <img src={process.env.PUBLIC_URL + '/img/portfolio/DSC_6166.jpg'} className="img img-view lazyloaded" />
            </div>
            <div className="col-12 col-md-4 pb-4 pb-md-1">
              <img src={process.env.PUBLIC_URL + '/img/portfolio/DSC_6452.jpg'} className="img img-view lazyloaded" />
            </div>
          </div>
        </section>
        <section className="container section section-image-one-v">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-9 pb-4 pd-md-1">
              <img src={process.env.PUBLIC_URL + '/img/portfolio/DSC_6572.jpg'} className="img img-view lazyloaded" />
            </div>
          </div>
        </section>
     </div>
    );
}

export default Portfolio;
