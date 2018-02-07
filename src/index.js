import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import {Provider} from "react-redux";
import {BrowserRouter} from "react-router-dom";
import RouteComponent from "./component/route.component";
// import {applyMiddleware, createStore} from "redux";
// import thunk from "redux-thunk";
// import reducers from "./reducer";


const App = () => {
    return (
        <BrowserRouter>
            <RouteComponent/>
        </BrowserRouter>
    )
};

ReactDOM.render(<App/>, document.getElementById('root'));
