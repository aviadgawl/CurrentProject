// Import component style.
import './login.style.css';

// Import general modules.
import * as React from 'react';
import FacebookLogin from 'react-facebook-login';

// Import app modules.
import { UserData } from '../../common/entities'

interface loginProps { userDataCallBack: any, isLoggedIn: boolean };
interface loginStatus { isLoggedIn: boolean };

export default class Login extends React.Component<loginProps, loginStatus>{

    constructor(props: loginProps) {
        super(props);
        this.state = { isLoggedIn: props.isLoggedIn };
    }

    responseFacebook(response: any) {
        let userData = new UserData(response.name, `http://graph.facebook.com/${response.id}/picture?type=large`, response.id);
        this.props.userDataCallBack(userData);
        this.setState({ isLoggedIn: true });
    }

    componentClicked() { }

    renderFacebookLoginButton() {

        if (!this.state.isLoggedIn) {
            return <FacebookLogin
                appId="192852171472550"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook.bind(this)} />
        }
    }

    render() {
        return <div>
            {this.renderFacebookLoginButton()}
        </div>
    }
}