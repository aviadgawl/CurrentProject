// react librarys (@react-types , @react-dom-types)
import * as React from 'react';
import * as ReactDOM from 'react-dom';

//load css files.
import './style.css';

//my app components
import TaskApp from './components/tasksApp/tasksApp.component';

document.write("<div id='taskApp' />");

ReactDOM.render(
    <TaskApp />,
    document.getElementById("taskApp")
);