import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  updateMessage = event => {
    this.setState({message: event.target.value})
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" name="message" id="message" onChange={this.updateMessage} value={this.state.message}/>
        Characters Remaining: {this.props.maxChars - this.state.message.length}
      </div>
    );
  }
}

export default TwitterMessage;
