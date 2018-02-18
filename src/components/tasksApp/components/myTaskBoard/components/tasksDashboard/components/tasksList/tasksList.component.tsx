import './tasksList.style.css';
import * as React from 'react';

interface tasksListProps {header:string};
interface tasksListStatus {};

export default class TasksList extends React.Component<tasksListProps , tasksListStatus>{
    constructor(props:tasksListProps){
        super(props);
    }

    render(){
        return <div>
            <h1>{this.props.header}</h1>
        </div>
    }
}