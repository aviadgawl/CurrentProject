// react librarys (@react-types , @react-dom-types)
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';

//load css files.
import './style.css';
import 'foundation-sites/dist/css/foundation.css';
import './favicon.png';

//my app components
import TaskApp from './components/tasksApp/tasksApp.component';

ReactDOM.render(
    <TaskApp />,
    document.getElementById("root")
);