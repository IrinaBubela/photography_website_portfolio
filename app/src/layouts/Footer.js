import React from 'react';
import "../home.css";

class Footer extends React.Component {
    render() {
        return (
            <div className="footer" id="footer">
                <div className="photograper-name">
                    <a>KATYA_POLYUH</a>
                </div>
                <div className="photographer-number">
                    <span>Телефон: (29) 726-25-72</span>
                </div>
                <div className="photographer-links">
                    <span>Пишите: </span>
                    <div className="social-links">
                        <a href="https://www.instagram.com/katyapolyuh_ph/">Instagram</a>
                        <span>Telegram</span>
                        <span>Whatsapp</span>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;