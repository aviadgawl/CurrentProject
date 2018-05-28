import * as React from 'react'

interface TaskBlockProps { head: string, body: string, prioraty: number, type: string };
interface TaskBlockStatus { value: any };

export default class TaskBlock extends React.Component<TaskBlockProps, TaskBlockStatus>{

    constructor(props: TaskBlockProps) {
        super(props);
    }

    renderButtons() {
        let buttons = <div></div>
debugger
        if (this.props.type == "completed") {
            buttons = <div>
                <a href={location.href}>Complete</a> | <a href={location.href}>Delete</a>
            </div>
        }

        if (this.props.type == "incompleted") {
            buttons = <div>
                <a href={location.href}>Mark</a> | <a href={location.href}>Delete</a>
            </div>
        }

        return buttons;
    }

    public render() {
        return <div className={`callout ${this.props.type}`}>
            <h5>{this.props.head}</h5>
            <p>{this.props.body}</p>
            {this.renderButtons()}
        </div>
    }
}