import './login.style.css';
import * as React from 'react';
import FacebookLogin from 'react-facebook-login';
import {UserData} from '../../../../entits'

interface loginProps {userDataCallBack:any };
interface loginStatus { };

export default class Login extends React.Component<loginProps, loginStatus>{
 
    constructor(props: loginProps) {
        super(props);
    }

    responseFacebook(response: any) {
        debugger
        let userData = new UserData(response.name , `http://graph.facebook.com/${response.id}/picture?type=large` , response.id);
        this.props.userDataCallBack(userData);
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