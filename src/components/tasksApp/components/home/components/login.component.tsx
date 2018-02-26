import './login.style.css';
import * as React from 'react';
import FacebookLogin from 'react-facebook-login';

interface loginProps {userDataCallBack:any };
interface loginStatus { };

export default class Login extends React.Component<loginProps, loginStatus>{
    
    constructor(props: loginProps) {
        super(props);
    }

    responseFacebook(response: any) {
        this.props.userDataCallBack(response);
    }

    componentClicked() { }

    render() {
        return <div>
            <FacebookLogin
                appId="192852171472550"
                autoLoad={true}
                fields="name,email,picture"
                onClick={this.componentClicked}
                callback={this.responseFacebook.bind(this)} />
        </div>
    }
}