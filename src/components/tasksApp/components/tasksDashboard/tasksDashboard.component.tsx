import './tasksDashboard.style.css';
import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import TasksList from '../tasksList/tasksList.component';
import AddTask from '../addTask/addTask.component';
import { UserData } from '../../common/entits';
import { Task } from '../../common/entits';

interface tasksDashboardProps {userData: UserData};
interface tasksDashboardStatus { acitveLinkIndex: number };

export default class TasksDashboard extends React.Component<tasksDashboardProps, tasksDashboardStatus>{
    constructor(props: tasksDashboardProps) {
        super(props);
        this.state = { acitveLinkIndex: 0 };
    }

    setActiveLinkIndex(index: number) {
        this.setState({ acitveLinkIndex: index });
    }

    getCompletedTasks(){
        debugger
        return this.props.userData.tasks.filter((task) => {return task.status == "completed"});
    }

    getInCompletedTasks(){
        debugger
        return this.props.userData.tasks.filter((task) => {return task.status == "incompleted"});
    }

    render() {
        return <HashRouter >
            <div>
                <div id="TasksDashboardNavbar">
                    <ul className="mobile-app-filter-menu" data-mobile-app-filter-menu>
                        <li className={this.state.acitveLinkIndex == 0 ? "is-active" : ''}>
                            <Link onClick={(e) => this.setActiveLinkIndex(0)} to={'/MyTasksBoard/'}>Incompleted</Link>
                        </li>
                        <li className={this.state.acitveLinkIndex == 1 ? "is-active" : ''}>
                            <Link onClick={(e) => this.setActiveLinkIndex(1)} to={'/MyTasksBoard/Completed'}>Completed</Link>
                        </li>
                        <li className={this.state.acitveLinkIndex == 2 ? "is-active" : ''}>
                            <Link onClick={(e) => this.setActiveLinkIndex(2)} to={'/MyTasksBoard/Add'}>Add</Link>
                        </li>
                        <li className={this.state.acitveLinkIndex == 3 ? "is-active" : ''}>
                            <Link onClick={(e) => this.setActiveLinkIndex(3)} to={'/MyTasksBoard/Recent'}>Recent</Link>
                        </li>
                    </ul>
                </div>
                <div id="TasksDashboardBody">
                    <Switch>
                        <Route path='/MyTasksBoard/Completed' render={() => <TasksList tasks={this.getCompletedTasks()} header="Completed" type="completed" />} />
                        <Route path='/MyTasksBoard/Add' render={() => <AddTask />} />
                        <Route path='/MyTasksBoard/Recent' render={() => <TasksList tasks={this.getInCompletedTasks()} header="Recent" type="secondary"/>} />
                        <Route path='/MyTasksBoard/' render={() => <TasksList tasks={this.getInCompletedTasks()} header="Incompleted" type="incompleted" />} />
                    </Switch>
                </div>
            </div>
        </ HashRouter>
    }
}