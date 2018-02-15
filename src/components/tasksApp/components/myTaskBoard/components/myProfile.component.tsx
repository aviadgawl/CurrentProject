import './myProfile.style.css';
import * as React from 'react';
import * as $ from 'jquery';

interface myProfileProps { };
interface myProfileStatus { };

export default class MyProfile extends React.Component<myProfileProps, myProfileStatus>{
    constructor(props: myProfileProps) {
        super(props);
    }

    expendProfile(e:any) {
        e.preventDefault();
        if ($(".card-profile-stats-more-content").is(':hidden')) {
            $('.card-profile-stats-more-link').find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
        } else {
            $('.card-profile-stats-more-link').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
        }
        $(this).next('.card-profile-stats-more-content').slideToggle();
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
                        <span className="stat">25</span>
                        <p>posts</p>
                    </div>
                    <div className="card-profile-stats-statistic">
                        <span className="stat">125</span>
                        <p>followers</p>
                    </div>
                    <div className="card-profile-stats-statistic">
                        <span className="stat">88</span>
                        <p>likes</p>
                    </div>
                </div>

                <div className="card-profile-stats-more">
                    <p className="card-profile-stats-more-link">
                        <a href="#" onClick={(e) => {this.expendProfile(e)}}><i className="fa fa-angle-down" aria-hidden="true"></i></a>
                    </p>
                    <div className="card-profile-stats-more-content">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem libero fugit,
                             pariatur maxime! Optio enim, deserunt quia molestiae fugiat delectus, dolore et esse nostrum,
                              quod autem necessitatibus fugit soluta repellendus.
                        </p>
                    </div>
                </div>
            </div>

        </div >
    }
}

