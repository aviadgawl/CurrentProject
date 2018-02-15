// General Modules.
import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

// Import My Styles.
import './tasksApp.style.css';

// My Modules.
import MyTasksBoard from './components/myTaskBoard/myTasksBoard.component'
import Home from './components/home/home.component';
import Footer from './components/footer/footer.component';

interface TasksAppProps { };
interface TasksAppStatus { acitveLinkIndex: number };

export default class tasksApp extends React.Component<TasksAppProps, TasksAppStatus>{

    constructor(props: TasksAppProps) {
        super(props,);
        this.state = { acitveLinkIndex: 0 };
    }

     setActiveLinkIndex(index:number){
        this.setState({acitveLinkIndex: index});
     }

    render() {

        return <HashRouter>
            <div id="page">

                <div className="tasksNavbarPadding" id="navBar" >
                    <ul className="menu menu-hover-lines">
                        <li className={this.state.acitveLinkIndex == 0 ? "active" : ''}>
                            <Link onClick={(e) => this.setActiveLinkIndex(0)} to={'/'}>Home</Link>
                        </li>
                        <li  className={this.state.acitveLinkIndex == 1 ? "active" : ''}>
                            <Link onClick={(e) => this.setActiveLinkIndex(1)} to={'/MyTasksBoard'}>My Tasks Board</Link>
                        </li>
                        <li><a href="#">My Protages</a></li>
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

        </ HashRouter>
    }
}