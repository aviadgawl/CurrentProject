// react librarys (@react-types , @react-dom-types)
import * as React from 'react';
import * as ReactDOM from 'react-dom';

//load css files.
import './style.css';
import '../node_modules/foundation-sites/dist/css/foundation.css';
//my app components
import TaskApp from './components/tasksApp/tasksApp.component';

document.write("<div id='taskApp' class='fullPage' />");

ReactDOM.render(
    <TaskApp />,
    document.getElementById("taskApp")
);