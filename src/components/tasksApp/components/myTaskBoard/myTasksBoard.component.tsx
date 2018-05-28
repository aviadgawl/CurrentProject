// Import My Styles.
import './myTasksBoard.style.css';

// General Modules
import * as React from 'react';

// My Modules.
import MyProfile from '../myProfile/myProfile.component';
import StatusRing from '../statusRing/statusRing.component';
import TasksDashboard from '../tasksDashboard/tasksDashboard.component';
import { UserData } from '../../common/entits';

interface MyTasksBoardProps { userData: UserData };
interface MyTasksBoardStatus { };

export default class MyTasksBoard extends React.Component<MyTasksBoardProps, MyTasksBoardStatus>{

    constructor(props: MyTasksBoardProps) {
        super(props);
    }

    render() {
        return <div className="taskBoard grid-x">
            <div id="myProfile" className="myProfileContainer cell medium-6 large-6">
                < MyProfile userData={this.props.userData} />
            </div>
            <div id="tasksDashboard" className="tasksDashboardContainer cell medium-6 large-6">
                <TasksDashboard userData={this.props.userData} />
            </div>
            <div id="statusRing" className="statusRingContainer cell medium-4 large-4">
                <StatusRing progression={7} maxProgression={10} />
            </div>
        </div>
    }
}