import './myTaskBoard.style.css';
import * as React from 'react';
import MyProfile from './components/myProfile.component';

interface MyTasksBoardProps { };
interface MyTasksBoardStatus { };

export default class MyTasksBoard extends React.Component<MyTasksBoardProps, MyTasksBoardStatus>{

    constructor(props: MyTasksBoardProps) {
        super(props);
    }

    render() {
        return <div className="taskBoard">
            <div id="myProfile" className="myProfileContainer">
                < MyProfile />
            </div>

        </div>
    }
}