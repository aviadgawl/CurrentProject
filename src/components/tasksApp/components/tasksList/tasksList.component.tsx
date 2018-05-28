import './tasksList.style.css';
import * as React from 'react';
import TaskBlock from '../taskBlock/taskBlock.component';
import { Task } from '../../common/entits';

interface tasksListProps { header: string, type: string, tasks: Task[] };
interface tasksListStatus { };

export default class TasksList extends React.Component<tasksListProps, tasksListStatus>{
    constructor(props: tasksListProps) {
        super(props);
    }

    renderTasks() {
        debugger
        return this.props.tasks.map((task , index) => {
            return <li key={index}><TaskBlock head={task.header} body="buy milk and suger" prioraty={2} type={this.props.type} /></li>
        });
    }

    render() {
        return <div className="callout">
            <ul className="cancelBullets">
                {this.renderTasks()}
            </ul>
        </div>
    }
}