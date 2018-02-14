import './footer.style.css'
import * as React from 'react';

interface footerProps { };
interface footerStatus { };

export default class Footer extends React.Component<footerProps, footerStatus>{

    constructor(props: footerProps) {
        super(props)
    }
   
    render() {
        return <div>
            <footer className="social-footer">
                <div className="social-footer-left">
                    <a href="#"><img className="logo footerSrcImage" /></a>
                </div>
                <div className="social-footer-icons">
                    <ul className="menu simple">
                        <li><a href="https://www.facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.instagram.com/?hl=en"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
                        <li><a href="https://www.pinterest.com/"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
                        <li><a href="https://twitter.com/?lang=en"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
            </footer>
        </div>
    }
}