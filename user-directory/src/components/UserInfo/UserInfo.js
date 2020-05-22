import React, {Component} from "react";

import './UserInfo.css'

class UserInfo extends Component {

    render() {
        const user = this.props.user;
        return (
            <div className="UserInfo">
                <div className="UserInfoHeader">
                    {user.id} / {this.props.totalUsers}
                </div>
                <div className="UserInfoDetails">
                    <div className="UserInfoDetailRow">
                        <span className="UserInfoName">{user.name.first} {user.name.last}</span>
                    </div>
                    <div className="UserInfoDetailRow">
                        <div className="Property"><span className="PropertyLabel">From: </span>{user.city}, {user.country}</div>
                        <div className="Property"><span className="PropertyLabel">Job Title: </span>{user.title}</div>
                        <div className="Property"><span className="PropertyLabel">Employer: </span>{user.employer}</div>
                    </div>
                    <div className="UserInfoDetailRow">
                        <div className="PropertyLabel">Favorite Movies:</div>
                        <ol>
                            {user.favoriteMovies.map((movie, index)=>
                             <li key={index}>{movie}</li>
                            )}
                        </ol>
                    </div>
                </div>

            </div>
        )
    }
}

export default UserInfo