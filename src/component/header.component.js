import React, {Component} from 'react';
import {Link} from "react-router-dom";

class App extends Component {
    run2 = () => console.log("TEST");
    render() {
        return (
            <header ref="header">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/page">Page</Link></li>
                </ul>
                <div className="button">
                    <button onClick={this.props.run}>Initiate</button>
                    <button onClick={this.run2}>Initiate2</button>
                </div>
            </header>
        );
    }
}

export default App;
