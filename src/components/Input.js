import React, { Component } from "react";

class Input extends Component {
  constructor(props) {
    super(props);

    this.hanldeSubmit = this.hanldeSubmit.bind(this);
    this.textRef = React.createRef();
  }

  hanldeSubmit(event) {
    event.preventDefault();

    let value = this.textRef.current.value;
    if (value) {
      alert("No todo");
    } else {
      this.props.onSubmit(value);
    }
  }

  render() {
    return (
      <div className="row justify-content-between box">
        <div className="col-md-12">
          <form onSubmit={this.hanldeSubmit}>
            <input ref={this.textRef} type="text" className="form-control" />
          </form>
        </div>
      </div>
    );
  }
}

export default Input;
