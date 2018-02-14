import './home.style.css';
import * as React from 'react';

interface HomeProps { };
interface HomeStatus { };

export default class Home extends React.Component<HomeProps, HomeStatus>{
    constructor(props: HomeProps) {
        super(props);
    }

    render() {
        return <div>
            <div className="marketing-site-hero">
                <div className="marketing-site-hero-content">
                    <h1>Yeti Snowcone Agency</h1>
                    <p className="subheader">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam omnis,
                        maxime libero natus qui minus!
                    </p>
                    <a href="#" className="round button">learn more</a>
                </div>
            </div>

        </div>
    }
}