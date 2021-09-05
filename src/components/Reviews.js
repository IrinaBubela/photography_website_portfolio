import React from "react";

class Reviews extends React.Component  {


  render() {
    return (
    <div className="reviews">
      <div className="container">
        <div class="row justify-content-center align-items-center">
          <h4>Отзывы клиентов</h4>
        </div>
        <div className="row my-4">
          <div className="col-lg-4 col-sm-12">
            <div className="review-img mb-4">
              <img alt="review-1" src={process.env.PUBLIC_URL + '/img/reviews/review-1.jpg'} className="img img-view lazyloaded" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="review-img mb-4">
              <img alt="review-2" src={process.env.PUBLIC_URL + '/img/reviews/review-2.jpg'} className="img img-view lazyloaded" />
            </div>
          </div>
          <div className="col-lg-4 col-sm-12">
            <div className="review-img mb-4">
              <img alt="review-3" src={process.env.PUBLIC_URL + '/img/reviews/review-3.jpg'} className="img img-view lazyloaded" />
            </div>
          </div>
        </div>
        <div className="row my-4">
          <div className="col-lg-6 col-sm-12">
            <div className="review-img mb-4">
              <img alt="review-4" src={process.env.PUBLIC_URL + '/img/reviews/review-4.jpg'} className="img img-view lazyloaded" />
            </div>
          </div>
          <div className="col-lg-6 col-sm-12">
            <div className="review-img mb-4">
              <img alt="review-5" src={process.env.PUBLIC_URL + '/img/reviews/review-5.jpg'} className="img img-view lazyloaded" />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Reviews;
