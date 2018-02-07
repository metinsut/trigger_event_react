import React, {Component} from 'react';

class Under extends Component {
    run = () => console.log("okay");
    render() {
        return (
            <div>
                <button ref="button2" onClick={this.run}>Initiate</button>
            </div>
        );
    }
}

export default Under;
