import './myTasksBoard.style.css';
import * as React from 'react';
import MyProfile from './components/myProfile/myProfile.component';
import StatusRing from './components/statusRing/statusRing.component'

interface MyTasksBoardProps { };
interface MyTasksBoardStatus { };

export default class MyTasksBoard extends React.Component<MyTasksBoardProps, MyTasksBoardStatus>{

    constructor(props: MyTasksBoardProps) {
        super(props);
    }

    render() {
        return <div className="taskBoard grid-x">
            <div id="myProfile" className="myProfileContainer cell medium-6 large-6">
                < MyProfile />
            </div>
            <div id="tasksDashboard" className="tasksDashboardContainer cell medium-6 large-6">

            </div>
            <div id="statusRing" className="statusRingContainer cell medium-4 large-4">
                <StatusRing  progression={5} maxProgression={10}/>
            </div>
        </div>
    }
}