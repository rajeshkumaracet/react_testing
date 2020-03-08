import React from "react";

class UserOutput extends React.Component {
  render() {
    return (
      <div>
        <p>Hello, {this.props.name}!</p>
        <h1>Hello Rajeshkumar</h1>
        <p>So far it's go awesome!</p>
      </div>
    );
  }
}

export default UserOutput;
