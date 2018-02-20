import './contact.style.css';
import * as React from 'react';

interface contactProps { };
interface contactStatus { };

export default class Contact extends React.Component<contactProps, contactStatus>{

    constructor(props: contactProps) {
        super(props);
    }

    render() {
        return <div className="contactContainer">
            <section className="contact-us-section grid-x">

                <div className="columns contact-us-section-left cell large-6">
                    <h1 className="contact-us-header">Get In Touch</h1>
                    <div id="googleMap">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3381.234408910664!2d34.78260019611898!3d32.062908096781264!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151d4b7b02f287f7%3A0xb987022248f27f2c!2z16jXmdeRItecIDcsINeq15wg15DXkdeZ15Eg15nXpNeV!5e0!3m2!1siw!2sil!4v1519050633552" width="100%" height="100%" style={{minHeight:'263px', minWidth:'204px'}} ></iframe>
                    </div>

                    <ul className="contact-us-list">
                        <li className="address">Rival 7 Tel Aviv, Israel CA 95008</li>
                        <li className="email"><a href="mailto:">Tasker@gmail.com</a></li>
                        <li className="phone">
                            +972 549953012
                            </li>
                    </ul>
                </div>
                <div className="columns contact-us-section-right cell large-6">
                    <h1 className="contact-us-header">Mail Us</h1>
                    <form className="contact-us-form">
                        <input type="text" placeholder="Full name" />
                        <input type="email" placeholder="Email" />
                        <textarea></textarea>
                        <div className="contact-us-form-actions">
                            <input type="submit" className="button" value="Send it" />
                            <div>
                                <label className="button contact-us-file-button">Attach Files</label>
                                <input type="file" id="FileUpload" className="show-for-sr" />
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    }
}