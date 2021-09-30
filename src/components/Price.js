import React from "react";

class Price extends React.Component  {
  render() {
    return (
    <div className="price">
      <div className="section-individ-shoot">
        <div className="title">
          <h4>Индивидуальная съемка, модельные тесты</h4>
        </div>
        <div className="container section-individ-shoot-inner">
          <div className="row">
            <div className="col-lg-6 col-sm-12 section-individ-shoot-inner-first-div column-div">
              <section>
                <h6>Пакет Light</h6>
                <span>60 рублей</span>
              </section>
              <div className="section-description-conditions column-div">
                <span>В стоимость входит</span>
                <p>30 минут фотосъемки<br/>
                  Помощь в подборе образа<br/>
                  Помощь в позировании<br/>
                  Подбор локации<br/>
                  Ретушь и цветокоррекция 7 фото (доп. фото 7р)<br/>
                  Ссылка на файлообменник со всеми фотографиями в хорошем качестве<br/>
                  Срок обработки фото: 7-10 дней <br/>
                </p>
                <p>
                <span>Отдельно оплачивается:</span> <br/>
                  Студия (от 35 рублей в час)<br/>
                  Работа визажиста.<br/>
                  Мэйк и укладка ( от 100 рублей )<br/>
                  Работа стилиста (от 50 рублей)<br/>
                  *Для бронирования даты необходимо внести предоплату. (30 рублей на карту или на кошелек в приложении Оплати)
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-sm-12 column-div">
              <section>
                <h6>Пакет Basic</h6>
                <span>150 рублей</span>
              </section>
              <div className="section-description-conditions column-div">
                <span>В стоимость входит</span>
                <p>1 час фотосъемки<br/>
                  Помощь в подборе образа<br/>
                  Помощь в позировании<br/>
                  Подбор локации<br/>
                  Ретушь и цветокоррекция 12 фото (доп. фото 7 р)<br/>
                  Ссылка на файлообменник со всеми фотографиями в хорошем качестве<br/>
                  Срок обработки фото: 7-10 дней <br/>
                </p>
                <p>
                <span>Отдельно оплачивается:</span> <br/>
                  Студия (от 35 рублей в час)<br/>
                  Работа визажиста.<br/>
                  Мэйк и укладка ( от 100 рублей )<br/>
                  Работа стилиста (от 50 рублей) <br/>
                  *Для бронирования даты необходимо внести предоплату. (50 рублей на карту или на кошелек в приложении Оплати)
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-4">
          <div className="row">
            <div className="col-md-4 col-sm-12 pb-4">
              <img alt="price-1" src={process.env.PUBLIC_URL + '/img/portfolio/portfolio-1.svg'} className="img img-view lazyloaded" />
            </div>
            <div className="col-md-4 col-sm-12 pb-4">
              <img alt="price-2" src={process.env.PUBLIC_URL + '/img/portfolio/portfolio-2.svg'} className="img img-view lazyloaded" />
            </div>
            <div className="col-md-4 col-sm-12 pb-4">
              <img alt="price-3" src={process.env.PUBLIC_URL + '/img/portfolio/portfolio-5.svg'} className="img img-view lazyloaded" />
            </div>
          </div>
        </div>
        <div className="section-individ-shoot">
          <div className="title">
            <h4>Сьемка для брендов одежды</h4>
          </div>
          <div className="container section-individ-shoot-inner">
            <div className="row">
              <div className="col-lg-6 col-sm-12 section-individ-shoot-inner-first-div column-div">
                <section>
                  <h6>Пакет mini</h6>
                  <span>150 рублей</span>
                </section>
                <div className="section-description-conditions">
                  <span>В стоимость входит</span>
                  <p>1 час фотосъемки (доп. час 100 р)<br/>
                    Ретушь 12 фото с 1 часа (доп. фото 7 р)<br/>
                    Ссылка на файлообменник со всеми фотографиями в хорошемкачестве.<br/>
                    Срок обработки фото: 3-7 дней<br/>
                  </p>
                  <p>
                  <span>Отдельно оплачивается:</span> <br/>
                    Студия (от 35 рублей в час)<br/>
                    Работа визажиста. Мэйк и укладка ( от 100 рублей )<br/>
                    Работа стилиста. Стилизация аксессуарами и обувью ( от 50 р)<br/>
                    *Для бронирования даты необходимо внести предоплату. (50 рублейна карту или на кошелек в приложении Оплати)
                  </p>
                </div>
              </div>
              <div className="col-lg-6 col-sm-12 column-div">
                <section>
                  <h6>Пакет Standart</h6>
                  <span>250 рублей </span>
                </section>
                <div className="section-description-conditions column-div">
                  <span>В стоимость входит</span>
                  <p>2 часа фотосъемки (доп. час 100 р)<br/>
                    Ретушь 12 фото с 1 часа (доп. фото 7 р)<br/>
                    Ссылка на файлообменник со всеми фотографиями в хорошем качестве<br/>
                    Срок обработки фото: 3-7 дней<br/>
                  </p>
                  <p>
                  <span>Отдельно оплачивается:</span> <br/>
                    Студия (от 35 рублей в час)<br/>
                    Работа визажиста. Мэйк и укладка ( от 100 рублей )<br/>
                    Работа стилиста. Стилизация аксессуарами и обувью ( от 50 р)<br/>
                    *Для бронирования даты необходимо внести предоплату. (100 рублейна карту или на кошелек в приложении Оплати)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container my-4">
          <div className="row">
            <div className="col-md-4 col-sm-12 pb-4">
              <img alt="price-4" src={process.env.PUBLIC_URL + '/img/brands/brand-1.svg'} className="img img-view lazyloaded" />
            </div>
            <div className="col-md-4 col-sm-12 pb-4">
              <img alt="price-5" src={process.env.PUBLIC_URL + '/img/brands/brand-2.svg'} className="img img-view lazyloaded" />
            </div>
            <div className="col-md-4 col-sm-12 pb-4">
              <img alt="price-6" src={process.env.PUBLIC_URL + '/img/brands/brand-3.jpg'} className="img img-view lazyloaded" />
            </div>
          </div>
        </div>
      </div>
     </div>
    );
  }
}

export default Price;
