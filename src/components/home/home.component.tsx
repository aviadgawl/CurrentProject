import './home.style.css';
import * as React from 'react';

interface HomeProps { };
interface HomeStatus { };

export default class Home extends React.Component<HomeProps, HomeStatus>{
    constructor(props: HomeProps) {
        super(props);
    }

    render() {
        return <div >
            <div className="header-grid">
                <div id="b1" className="block"></div>
                <div id="b2" className="block"></div>
                <div id="b3" className="block"></div>
                <div id="b4" className="block"></div>
                <div className="bottom-block">
                    <div id="b5" className="block"></div>
                    <div id="b6" className="block"></div>
                    <div id="b7" className="block"></div>
                </div>

            </div>
        </div>
    }
}