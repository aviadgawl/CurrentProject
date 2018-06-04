// General Modules.
import * as React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { HashRouter } from 'react-router-dom';

// Import Component Styles.
import './tasksApp.style.css';

// App Modules.
import MyTasksBoard from './components/myTaskBoard/myTasksBoard.component'
import Home from './components/home/home.component';
import Footer from './components/footer/footer.component';
import Contact from './components/contact/contact.component';
import { UserData } from './common/entits';
import { Task } from './common/entits';
import DataService from './common/DataService';

interface TasksAppProps { };
interface TasksAppStatus { acitveLinkIndex: number, isLoggedIn: boolean };

export default class TasksApp extends React.Component<TasksAppProps, TasksAppStatus>{
    private userToken: string;
    private userData: UserData;
    private svc: DataService;

    constructor(props: TasksAppProps) {
        super(props, );
        this.state = { acitveLinkIndex: 0, isLoggedIn: false };
        this.svc = new DataService('http://localhost:8181');

        let preUserData: string = localStorage.getItem("userData");
        this.userData = preUserData ? JSON.parse(preUserData) : new UserData(null, null, null);
    }

    getUserData(userData: UserData) {
        this.userData = userData;

        this.svc.getUserInfo(this.userData.id, (userData: UserData, status: string) => {

                if (userData == null && status == "user not found") this.saveUser();
                else {
                    this.userData.points = userData.points
                    this.getUserTasks();
                }
        });

        if (this.userData.userName) {
            this.setState({ isLoggedIn: true })
            localStorage.setItem("userData", JSON.stringify(this.userData));
        }
    }

    saveUser = () => {
        this.svc.saveUser(this.userData, function (data: any, status: any) {
            if (data) console.log(data);
            if (status) console.log(status);
        });
    }

    getUserTasks = () => {
        this.svc.getUserTasks(this.userData.id, (tasks: Task[], status: any) => {
            if(tasks && status == "ok") this.userData.tasks = tasks;
        });
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
                        <Route path='/MyTasksBoard' render={() => <MyTasksBoard userData={this.userData} svc={this.svc} />} />
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