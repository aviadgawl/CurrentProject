import './tasksDashboard.style.css';
import * as React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';
import TasksList from './components/tasksList/tasksList.component';

interface tasksDashboardProps { };
interface tasksDashboardStatus { };

export default class TasksDashboard extends React.Component<tasksDashboardProps, tasksDashboardStatus>{
    constructor(props: tasksDashboardProps) {
        super(props);
    }

    render() {
        return <HashRouter >
            <div>
                <div id="TasksDashboardNavbar">
                    <ul className="mobile-app-filter-menu" data-mobile-app-filter-menu>
                        <li className="is-active">
                            <Link to={'/MyTasksBoard/#TasksList'}>Tasks List</Link>
                        </li>
                        <li><a href="/#/MyTasksBoard">Week</a></li>
                        <li><a href="/#/MyTasksBoard">Month</a></li>
                        <li><a href="/#/MyTasksBoard">Year</a></li>
                    </ul>
                </div>
                <div id="TasksDashboardBody">
               
                    <Switch>
                        <Route path='/MyTasksBoard/#TasksList' component={TasksList} />
                    </Switch>
                </div>
            </div>
        </ HashRouter>
    }
}