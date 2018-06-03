// Import component style.
import './addTask.style.css';

// Import general modules.
import * as React from 'react';

// Import app modules.
import DataService from '../../common/DataService';
import { Task } from '../../common/entits';
import { UserData } from '../../common/entits';
import AppConfig from '../../common/AppConfig';

interface addTaskProps { userData: UserData };
interface addTaskStatus { };

export default class AddTask extends React.Component<addTaskProps, addTaskStatus>{
    private svc: DataService;
    private taskData: Task;

    constructor(props: addTaskProps) {
        super(props);
        this.svc = new DataService("http://localhost:8181");
        this.taskData = new Task();
        this.taskData.body = "";
        this.taskData.userFacebookId = this.props.userData.id;
    }

    saveTask = () => {
        debugger
        if (this.validateFields()) {
            this.svc.saveTask(this.taskData, (data: any, status: any) => {
                debugger
            });
        }
        else{
            alert("The body cant be empty");
        }
    }

    validateFields = (): Boolean => {
        let isBodyNotEmpty = this.taskData.body.length > 0;
        return isBodyNotEmpty;
    }

    render() {
        return <div>
            <div className="status-update-input-box">
                <form>
                    <div className="row input-box-container">
                        <div className="columns">
                            <label>
                                <textarea value={this.taskData.body}></textarea>
                            </label>
                        </div>
                    </div>
                    <div className="row medium-collapse user-action-container">
                        <div className="small-12 medium-7 columns">
                            <div className="user-action-box">
                                <div className="action-area">
                                    <a href="#" className="action-anchor has-tip bottom" data-tooltip aria-haspopup="true"
                                        data-disable-hover="false" title="Upload a Photo">
                                        <i className="fa fa-picture-o" aria-hidden="true"></i>
                                        <span className="show-for-sr">Upload a Photo</span>
                                    </a>
                                </div>
                                <div className="action-area">
                                    <a href="#" className="action-anchor has-tip bottom" data-tooltip aria-haspopup="true"
                                        data-disable-hover="false" title="Upload a Video">
                                        <i className="fa fa-video-camera" aria-hidden="true"></i>
                                        <span className="show-for-sr">Upload a Video</span>
                                    </a>
                                </div>
                                <div className="action-area">
                                    <a href="#" className="action-anchor has-tip bottom" data-tooltip aria-haspopup="true"
                                        data-disable-hover="false" title="Check in">
                                        <i className="fa fa-map-marker" aria-hidden="true"></i>
                                        <span className="show-for-sr">Add Location</span>
                                    </a>
                                </div>
                                <div className="action-area">
                                    <a href="#" className="action-anchor has-tip bottom" data-tooltip aria-haspopup="true"
                                        data-disable-hover="false" title="Add a Feeling">
                                        <i className="fa fa-smile-o" aria-hidden="true"></i>
                                        <span className="show-for-sr">Add a Feeling</span>
                                    </a>
                                </div>
                                <div className="action-area">
                                    <a href="#" className="action-anchor has-tip bottom" data-tooltip aria-haspopup="true"
                                        data-disable-hover="false" title="Tag a Friend">
                                        <i className="fa fa-tags" aria-hidden="true"></i>
                                        <span className="show-for-sr">Tag a Friend</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="small-12 medium-5 columns">
                            <div className="user-submit-box">
                                <input onClick={this.saveTask} type="button" className="button small" value="ADD" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    }
}

