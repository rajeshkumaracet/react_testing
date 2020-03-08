import React from "react";

class UserOutput extends React.Component {
  render() {
    return (
      <div>
        <p>Hello, {this.props.name}!</p>
        <p>So far it's go awesome!</p>
      </div>
    );
  }
}

export default UserOutput;
