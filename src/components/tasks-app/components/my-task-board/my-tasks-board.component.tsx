// Import My Styles.
import './my-tasks-board.style.css';

// General Modules
import * as React from 'react';

// My Modules.
import MyProfile from '../my-profile/my-profile.component';
import StatusRing from '../status-ring/status-ring.component';
import TasksDashboard from '../tasks-dashboard/tasks-dashboard.component';
import { UserData } from '../../common/entities';
import ServiceData from '../../common/data-service';

interface MyTasksBoardProps { userData: UserData , svc: ServiceData };
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
                <TasksDashboard userData={this.props.userData} svc={this.props.svc} />
            </div>
            <div id="statusRing" className="statusRingContainer cell medium-4 large-4">
                <StatusRing progression={7} maxProgression={10} />
            </div>
        </div>
    }
}