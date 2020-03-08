import React from "react";

class UserInput extends React.Component {
  render() {
    return (
      <input
        type="text"
        onChange={this.props.changed}
        value={this.props.currentName}
      />
    );
  }
}

export default UserInput;
