import './myProfile.style.css';
import * as React from 'react';
import { UserData } from '../../common/entits';

interface myProfileProps { userData: UserData };
interface myProfileStatus { };

export default class MyProfile extends React.Component<myProfileProps, myProfileStatus>{
    constructor(props: myProfileProps) {
        super(props);
    }

    render() {
        return <div>
            <div className="card-profile-stats">
                <div className="card-profile-stats-intro">
                    <img className="card-profile-stats-intro-pic" src={this.props.userData.pictrueUrl} alt="profile-image" />
                    <div className="card-profile-stats-intro-content">
                        <h3>{this.props.userData.userName}</h3>
                        <p>Joined Jan.16th 2017</p>
                    </div>
                </div>

                <hr />

                <div className="card-profile-stats-container">
                    <div className="card-profile-stats-statistic">
                        <span className="stat">{this.props.userData.points}</span>
                        <p>points</p>
                    </div>
                    <div className="card-profile-stats-statistic">
                        <span className="stat">{this.props.userData.calculateLevel()}</span>
                        <p>level</p>
                    </div>
                    <div className="card-profile-stats-statistic">
                        <span className="stat">7</span>
                        <p>protages</p>
                    </div>
                </div>
            </div>

        </div >
    }
}

