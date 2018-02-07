import React, {Component} from 'react';
import {Route, Switch} from "react-router-dom";
import Header from "./header.component";
import Home from "./home.component";
import Page from "./page.component";
import {withRouter} from "react-router";
import ReactDOM from 'react-dom';

// import {connect} from "react-redux";

class RouteComponent extends Component {
    // run = () => ReactDOM.findDOMNode(this.refs.home).childNodes[1].click();


    run = () => ReactDOM.findDOMNode(this.refs.home).childNodes[1].click();


    render() {
        return (
            <React.Fragment>
                <Header run={this.run}/>
                <Switch>
                    {/*<Route exact to="/" component={Home} run={this.run}/>*/}
                    <Route exact to="/" ref={'home'} component={Home}/>
                    <Route to="/page" component={Page}/>
                </Switch>
            </React.Fragment>
        );
    }
}

export default withRouter(RouteComponent);