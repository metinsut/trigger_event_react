import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Under from './under';


class Home extends Component {
    run = () => ReactDOM.findDOMNode(this.refs.com).childNodes[0].click();

    render() {
        return (
            <div>
                <h1>Home</h1>
                <button ref="button" onClick={this.run}>Initiate</button>
                <Under ref="com"/>
            </div>
        );
    }
}

export default Home;