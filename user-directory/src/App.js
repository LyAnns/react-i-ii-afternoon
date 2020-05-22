import React from 'react';
import './App.css';
import UserInfo from './components/UserInfo/UserInfo';

import userData from './data';


class App extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            users: userData,
            currentUserIndex: 0,
        }
    }

    showPrevious() {
        let index = this.state.currentUserIndex - 1;
        if (index < 0) {
            index = 0
        }
        this.setState({
            currentUserIndex: index
        })
    }

    showNext() {
        let index = this.state.currentUserIndex + 1;
        if (index === this.state.users.length) {
            index = this.state.users.length -1;
        }
        this.setState({
            currentUserIndex: index
        })
    }

    render() {

        return (
            <div className="App">
                <div className="App-header">
                    <div className="App-link">Home</div>
                </div>
                <div className="App-main">
                    <UserInfo user={this.state.users[this.state.currentUserIndex]}
                              totalUsers={this.state.users.length}/>
                    <div className="NavPanel">
                        <div className="NavButton" onClick={this.showPrevious.bind(this)}>&lt; Previous</div>
                        <div className="ButtonPanel">
                            <div className="ActionButton" onClick={this.props.onClick}>Edit</div>
                            <div className="ActionButton" onClick={this.props.onClick}>Delete</div>
                            <div className="ActionButton" onClick={this.props.onClick}>New</div>
                        </div>
                        <div className="NavButton" onClick={this.showNext.bind(this)}>Next &gt;</div>
                    </div>

                </div>

            </div>
        );
    }
}

export default App;
