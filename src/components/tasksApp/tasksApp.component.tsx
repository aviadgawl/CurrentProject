// General Modules.
import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
// My Modules.
import MyTasksBoard from '../myTaskBoard/myTasksBoard.component'
import Home from '../home/home.component';
import Navbar from '../navbar/navbar.component';

interface TasksAppProps { };
interface TasksAppStatus { };

export default class tasksApp extends React.Component<TasksAppProps, TasksAppStatus>{

    constructor(props: TasksAppProps) {
        super(props);
    }

    render() {
        return <Router>
            <div id="page">

                <Navbar />

                {/* <div className="container">
                    <button className="btn">this is a button</button>
                </div>
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/MyTasksBoard'}>My Tasks Board</Link></li>
                </ul>

                <div id="body">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/MyTasksBoard' component={MyTasksBoard} />
                    </Switch>
                </div> */}


                <div id="footer">
                </div>
            </div>


        </Router >
    }
}