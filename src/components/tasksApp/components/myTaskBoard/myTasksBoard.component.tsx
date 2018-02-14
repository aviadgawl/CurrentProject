import './myTaskBoard.style.css';
import * as React from 'react';

interface MyTasksBoardProps { };
interface MyTasksBoardStatus { };

export default class MyTasksBoard extends React.Component<MyTasksBoardProps, MyTasksBoardStatus>{

    constructor(props: MyTasksBoardProps) {
        super(props);
    }

    render() {
        return <div className="taskBoard">
         this is the board
        </div>
    }
}