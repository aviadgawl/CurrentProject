import * as React from 'react'

interface TaskBlockProps {head:string , body:string , prioraty:number};
interface TaskBlockStatus {value:any};

export default class TaskBlock extends React.Component<TaskBlockProps , TaskBlockStatus>{
    private head:string;
    private body:string;
    private prioraty:number;

    constructor(props:TaskBlockProps){
        super(props);

        this.head = props.head;
        this.body = props.body;
        this.prioraty = props.prioraty;
    }
    
    public redner() {
        return <div>
            <div>
                <h3>{this.head}</h3>
            </div>
            <div>
                <p>{this.body}</p>
            </div>
        </div>
    }
}