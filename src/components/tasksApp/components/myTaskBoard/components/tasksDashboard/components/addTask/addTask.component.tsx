import './addTask.style.css';
import * as React from 'react';

interface addTaskProps { };
interface addTaskStatus { };

export default class AddTask extends React.Component<addTaskProps, addTaskStatus>{
    constructor(props: addTaskProps) {
        super(props);
    }

    render() {
        return <div>
            <div className="status-update-input-box">
                <form>
                    <div className="row input-box-container">
                        <div className="columns">
                            <label>
                                <textarea ></textarea>
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
                                <input type="submit" className="button small" value="ADD" />
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    }
}

