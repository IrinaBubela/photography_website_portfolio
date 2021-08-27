import React from "react";

class Price extends React.Component  {


  render() {
    return (
     <div className="price">
      <div className="section-individ-shoot">
        <div className="title">
          <h4>Индивидуальная съемка, модельные тесты</h4>
        </div>
        <div className="section-individ-shoot-inner">
          <div>
            <section>
              <h6>Пакет Light</h6>
              <span>60 рублей</span>
            </section>
            <div className="section-description-conditions">
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
                Отдельно оплачивается: <br/>
                Студия (от 35 рублей в час)<br/>
                Работа визажиста.<br/>
                Мэйк и укладка ( от 100 рублей )<br/>
                Работа стилиста (от 50 рублей)
              </p>
            </div>
          </div>
          <div>
            <section>
              <h6>Пакет Basic</h6>
              <span>60 рублей</span>
            </section>
            <div className="section-right-description-conditions">
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
                Отдельно оплачивается: <br/>
                Студия (от 35 рублей в час)<br/>
                Работа визажиста.<br/>
                Мэйк и укладка ( от 100 рублей )<br/>
                Работа стилиста (от 50 рублей)
              </p>
            </div>
          </div>
        </div>
        
      </div>
      <div className="section-brands-shoot">
        <div className="title">
          <h4>Сьемка для брендов одежды</h4>
        </div>
      </div>
     </div>
    );
  }
}

export default Price;
