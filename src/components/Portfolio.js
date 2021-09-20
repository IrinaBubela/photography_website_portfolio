import React from "react";

function Portfolio()  {
    return (
     <div className="portfolio">
        <section className="container section section-image-one-v">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-9 pd-md-1 pb-4">
              <img alt="portfolio-1" src={process.env.PUBLIC_URL + '/img/portfolio/portfolio-1.svg'} className="img img-view lazyloaded" />
            </div>
          </div>
        </section>
        <section className="container section section-image-two-type-1">
          <div className="row justify-content-between">
            <div className="col-12 col-md-7 pb-4">
              <img alt="portfolio-3" src={process.env.PUBLIC_URL + '/img/portfolio/portfolio-2.svg'} className="img img-view lazyloaded" />
            </div>
            <div className="col-12 col-md-5 pb-4">
              <img alt="portfolio-2" src={process.env.PUBLIC_URL + '/img/portfolio/portfolio-3.svg'} className="img img-view lazyloaded" />
            </div>
          </div>
        </section>
        <section className="container section section-image-two-type-1">
          <div className="row justify-content-between">
            <div className="col-12 col-md-5 pb-4">
              <img src={process.env.PUBLIC_URL + '/img/portfolio/portfolio-4.svg'} className="img img-view lazyloaded" />
            </div>
            <div className="col-12 col-md-7 pb-4">
              <img src={process.env.PUBLIC_URL + '/img/portfolio/individual-3.svg'} className="img img-view lazyloaded" />
            </div>
          </div>
        </section>
        <section className="container section section-image-three">
          <div className="row justify-content-between">
            <div className="col-12 col-md-4 pb-4 pb-md-1">
              <img src={process.env.PUBLIC_URL + '/img/portfolio/portfolio-5.svg'} className="img img-view lazyloaded" />
            </div>
            <div className="col-12 col-md-4 pb-4 pb-md-1">
              <img src={process.env.PUBLIC_URL + '/img/portfolio/portfolio-6.svg'} className="img img-view lazyloaded" />
            </div>
            <div className="col-12 col-md-4 pb-4 pb-md-1">
              <img src={process.env.PUBLIC_URL + '/img/portfolio/portfolio-7.svg'} className="img img-view lazyloaded" />
            </div>
          </div>
        </section>
        <section className="container section section-image-one-v">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-9 pb-4 pd-md-1">
              <img src={process.env.PUBLIC_URL + '/img/portfolio/portfolio-8.svg'} className="img img-view lazyloaded" />
            </div>
          </div>
        </section>
        <section className="container section section-image-two-type-1">
          <div className="row justify-content-between">
            <div className="col-12 col-md-5 pb-4">
              <img src={process.env.PUBLIC_URL + '/img/portfolio/portfolio-9.svg'} className="img img-view lazyloaded" />
            </div>
            <div className="col-12 col-md-7 pb-4">
              <img src={process.env.PUBLIC_URL + '/img/portfolio/portfolio-10.svg'} className="img img-view lazyloaded" />
            </div>
          </div>
        </section>
        <section className="container section section-image-one-v">
          <div className="row justify-content-center align-items-center">
            <div className="col-12 col-md-9 pb-4 pd-md-1">
              <img src={process.env.PUBLIC_URL + '/img/portfolio/portfolio-11.svg'} className="img img-view lazyloaded" />
            </div>
          </div>
        </section>
     </div>
    );
}

export default Portfolio;
