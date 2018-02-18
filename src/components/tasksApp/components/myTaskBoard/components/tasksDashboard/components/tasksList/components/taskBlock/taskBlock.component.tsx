import * as React from 'react'

interface TaskBlockProps { head: string, body: string, prioraty: number };
interface TaskBlockStatus { value: any };

export default class TaskBlock extends React.Component<TaskBlockProps, TaskBlockStatus>{

    constructor(props: TaskBlockProps) {
        super(props);
    }

    public render() {
        return <div className="callout secondary">
            <h5>{this.props.head}</h5>
            <p>{this.props.body}</p>
            <a href={location.href}>Complete</a> | <a href={location.href}>Delete</a>
        </div>
    }
}