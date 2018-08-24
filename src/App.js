import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.scss';
import {appAction} from "./actions/app.action";

class App extends Component {
  componentDidMount() {
    this.props.dispatch(appAction.setAppDetails());
  }

  render() {
    return (
      <div className="App">
        {this.props.app.details.name} version {this.props.app.details.version}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    app: state.app
  };
};
export default connect(mapStateToProps)(App);
