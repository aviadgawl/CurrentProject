// General Modules.
import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// My Modules.
import MyTasksBoard from './myTasksBoard.component';
import Home from './home.component';

interface TasksAppProps { };
interface TasksAppStatus { };

export default class tasksApp extends React.Component<TasksAppProps, TasksAppStatus>{

    constructor(props: TasksAppProps) {
        super(props);
    }

    render() {
        return <Router>
            <div id="page">
                <div className="container">
                    <button className="btn">this is a button</button>
                </div>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/MyTasksBoard'}>My Tasks Board</Link></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                   
                </ul>

                <div id="body">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/MyTasksBoard' component={MyTasksBoard} />
                    </Switch>
                </div>


                <div id="footer">
                </div>
            </div>


        </Router >
    }
}