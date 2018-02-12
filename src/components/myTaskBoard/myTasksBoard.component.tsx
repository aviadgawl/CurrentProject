import * as React from 'react'

interface MyTasksBoardProps { };
interface MyTasksBoardStatus { };

export default class MyTasksBoard extends React.Component<MyTasksBoardProps, MyTasksBoardStatus>{

    constructor(props: MyTasksBoardProps) {
        super(props);
    }

    render() {
        return <div>
            <div>
                here there will be my dashboard.
            </div>
            <div>
                here i will be able to add and remove my tasks.
            </div>
        </div>
    }
}