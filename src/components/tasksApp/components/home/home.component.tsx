import './home.style.css';
import * as React from 'react';
import Login from './components/login.component';

interface HomeProps { };
interface HomeStatus { };

export default class Home extends React.Component<HomeProps, HomeStatus>{
    constructor(props: HomeProps) {
        super(props);
    }

    getUserData(userData:any){
        debugger
    }

    render() {
        return <div className="marketing-site-hero">

            <div className="marketing-site-hero-content">
                <h1>The Tasks Game</h1>
                <p className="subheader subheaderHomeText">
                    Orgenize your tasks , earn points and gain new levels thats show how much productive you can be.
                    </p>
                <Login userDataCallBack={this.getUserData.bind(this)} />
            </div>
        </div>

    }
}