import './myProfile.style.css';
import * as React from 'react';

interface myProfileProps { };
interface myProfileStatus { };

export default class MyProfile extends React.Component<myProfileProps, myProfileStatus>{
    constructor(props: myProfileProps) {
        super(props);
    }

    render() {
        return <div>
            <div className="card-profile-stats">
                <div className="card-profile-stats-intro">
                    <img className="card-profile-stats-intro-pic" src="https://pbs.twimg.com/profile_images/732634911761260544/OxHbNdTF.jpg" alt="profile-image" />
                    <div className="card-profile-stats-intro-content">
                        <h3>Joe Smith</h3>
                        <p>Joined Jan.16th 2017</p>
                    </div>
                </div>

                <hr />

                <div className="card-profile-stats-container">
                    <div className="card-profile-stats-statistic">
                        <span className="stat">3403</span>
                        <p>points</p>
                    </div>
                    <div className="card-profile-stats-statistic">
                        <span className="stat">25</span>
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

