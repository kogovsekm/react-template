import React, { Component } from "react";

class Header extends Component {

  handleChange(e) {
    const greeting = e.target.value;
    this.props.changeGreeting(greeting);
  }


  render() {
    console.log(this.props)
    return (
      <div>
        <h5 className="custom-padding">{this.props.greeting}</h5>
        <input value={this.props.greeting} onChange={this.handleChange.bind(this)} />
      </div>
    );
  }
}

export default Header;