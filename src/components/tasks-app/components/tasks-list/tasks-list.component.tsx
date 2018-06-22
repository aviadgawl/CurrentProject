// Imports component style.
import './tasks-list.style.css';

// Imports general modules.
import * as React from 'react';

// Imports app modules.
import TaskBlock from '../task-block/task-block.component';
import { Task } from '../../common/entities';

interface tasksListProps { header: string, type: string, tasks: Task[] };
interface tasksListStatus { };

export default class TasksList extends React.Component<tasksListProps, tasksListStatus>{
    constructor(props: tasksListProps) {
        super(props);
    }

    renderTasks() {
        
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