import './tasksList.style.css';
import * as React from 'react';
import TaskBlock from './components/taskBlock/taskBlock.component';

interface tasksListProps { header: string , type:string };
interface tasksListStatus { };

export default class TasksList extends React.Component<tasksListProps, tasksListStatus>{
    constructor(props: tasksListProps) {
        super(props);
    }

    render() {
        return <div>
            <h1>{this.props.header}</h1>
            <ul>
                <li>
                <TaskBlock head="Go to the supermarket" body="buy milk and suger" prioraty={2} type={this.props.type} />
                </li>
                <li>
                <TaskBlock head="Go to the GYM" body="finish my daily workout" prioraty={2} type={this.props.type}  />
                </li>
            </ul>
        </div>
    }
}