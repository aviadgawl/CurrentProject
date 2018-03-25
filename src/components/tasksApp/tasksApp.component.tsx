// General Modules.
import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

// Import My Styles.
import './tasksApp.style.css';

// My Modules.
import MyTasksBoard from './components/myTaskBoard/myTasksBoard.component'
import Home from './components/home/home.component';
import Footer from './components/footer/footer.component';
import Contact from './components/contact/contact.component';
import { UserData } from './common/entits';

interface TasksAppProps { };
interface TasksAppStatus { acitveLinkIndex: number , isLoggedIn: boolean };

export default class TasksApp extends React.Component<TasksAppProps, TasksAppStatus>{
    private userToken: string;
    private userData: UserData;

    constructor(props: TasksAppProps) {
        super(props, );
        this.state = { acitveLinkIndex: 0 , isLoggedIn: false };
    }

    getUserData(userData: UserData) {
        this.userData = userData;

        if (this.userData.userName) {
            this.setState({isLoggedIn: true})
        }
    }

    renderLoggedinOptions() {
        if (this.state.isLoggedIn) {
            return [<li key="myTasksBoard" className={this.state.acitveLinkIndex == 1 ? "active" : ''}>
                <Link onClick={(e) => this.setActiveLinkIndex(1)} to={'/MyTasksBoard'}>My Tasks Board</Link>
            </li>,
            <li key="myProtages" className={this.state.acitveLinkIndex == 2 ? "active" : ''}>
                <a href="#">My Protages</a>
            </li>
            ]
        }
    }

    renderMyProtages() {
        return
    }

    setActiveLinkIndex(index: number) {
        this.setState({ acitveLinkIndex: index });
    }

    render() {

        return <HashRouter>
            <div id="page">

                <div className="tasksNavbarPadding" id="navBar" >
                    <ul className="menu menu-hover-lines">
                        <li className={this.state.acitveLinkIndex == 0 ? "active" : ''}>
                            <Link onClick={(e) => this.setActiveLinkIndex(0)} to={'/'}>Home</Link>
                        </li>
                   
                        {this.renderLoggedinOptions()}

                        <li className={this.state.acitveLinkIndex == 3 ? "active" : ''}>
                            <Link onClick={(e) => this.setActiveLinkIndex(3)} to={'/Contact'}>Contact</Link>
                        </li>
                    </ul>
                </div>

                <div id="body" className="bodyContainer">
                    <Switch>
                        <Route exact path='/' render={() => <Home userDataCallBack={this.getUserData.bind(this)} isLoggedIn={this.state.isLoggedIn} />} />
                        <Route path='/MyTasksBoard' render={() => <MyTasksBoard userData={this.userData} />} />
                        <Route exact path='/Contact' component={Contact} />
                    </Switch>
                </div>

                <div id="footer">
                    <Footer />
                </div>
            </div>

        </ HashRouter>
    }
}