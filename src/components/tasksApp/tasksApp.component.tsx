// General Modules.
import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// My Modules.
import MyTasksBoard from '../myTaskBoard/myTasksBoard.component'
import Home from '../home/home.component';
import Footer from '../footer/footer.component';

interface TasksAppProps { };
interface TasksAppStatus { };

export default class tasksApp extends React.Component<TasksAppProps, TasksAppStatus>{

    constructor(props: TasksAppProps) {
        super(props);
    }

    render() {
        return <Router>
            <div id="page">

                <div id="navBar">
                    <ul className="menu menu-hover-lines">
                        <li className="active"><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/MyTasksBoard'}>My Tasks Board</Link></li>
                        <li><a href="#">Blog</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Products</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>

                <div id="body">
                    <Switch>
                        <Route exact path='/' component={Home} />
                        <Route exact path='/MyTasksBoard' component={MyTasksBoard} />
                    </Switch>
                </div> 

                <div id="footer">
                    <Footer />
                </div>
            </div>


        </Router >
    }
}