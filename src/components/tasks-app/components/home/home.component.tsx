// Import component style
import './home.style.css';

// Import general modules.
import * as React from 'react';

// Import app modules.
import Login from '../login/login.component';
import { UserData } from '../.././common/entities';

interface HomeProps { userDataCallBack:any , isLoggedIn: boolean };
interface HomeStatus { };

export default class Home extends React.Component<HomeProps, HomeStatus>{
    constructor(props: HomeProps) {
        super(props);
    }

    getUserData(userData:UserData){
        this.props.userDataCallBack(userData);
    }

    render() {
        return <div className="marketing-site-hero">

            <div className="marketing-site-hero-content">
                <h1>The Tasks Game</h1>
                <p className="subheader subheaderHomeText">
                    Orgenize your tasks , earn points and gain new levels thats show how much productive you can be.
                    </p>
                <Login userDataCallBack={this.getUserData.bind(this)} isLoggedIn={this.props.isLoggedIn} />
            </div>
        </div>

    }
}