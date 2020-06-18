import React, { Component } from "react";
import moment from "moment";
import Form from "./components/Form";
import WatchList from "./components/WatchList";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      watches: [],
      currentUTC: null
    };
  }

  componentDidMount() {
    this.loadTime();
  }

  loadTime = () => {
    setInterval(() => {
      this.setState({
        currentUTC: moment().utc()
      });
    }, 1000);
  };

  handleAdd = watch => {
    this.setState(prevState => ({
      watches: [...prevState.watches, watch]
    }));
  };

  handleDelete = id => {
    this.setState(prevState => ({
      watches: prevState.watches.filter(watch => watch.id !== id)
    }));
  };

  componentWillUnmount() {
    clearInterval(this.loadTime);
  }

  render() {
    return (
      <div className="App">
          <Form handleAdd={this.handleAdd} />
          <WatchList
            watches={this.state.watches}
            currentUTC={this.state.currentUTC}
            handleDelete={this.handleDelete}
          />
      </div>
    );
  }
}

export default App;
