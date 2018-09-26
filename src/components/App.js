import React, { Component } from "react";

import "./App.scss";
import Logo from "./logo.svg";

/** Components */
import Input from "./Input";
import Todo from "./Todo";

class App extends Component {
  state = {
    todos: [
      {
        title: "Todo 1",
        done: true
      }
    ]
  };

  onSubmit = title => {
    alert("submitting");
  };

  onCheck = todo => {
    alert("checking");
  };

  onDelete = todo => {
    alert("deletting");
  };

  render() {
    return (
      <div id="app">
        <div className="row justify-content-center">
          <div className="box-container">
            <h2>React Todo</h2>
            <img src={Logo} alt="React Logo" />

            <Input onSubmit={this.onSubmit}/>

            <div className="row">
              {this.state.todos.map((todo, index) => (
                <Todo
                  key={index}
                  todo={todo}
                  onCheck={this.onCheck}
                  onDelete={this.onDelete}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
