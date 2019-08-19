import React, { Component } from "react"

class Octocat extends Component {
  render() {
    return (
      <li>
        <img src={this.props.imageUrl} alt={this.props.imageAlt} />
        <section>
          <p>
            {this.props.catNumber} <span>{this.props.catName}</span>
            {this.props.userName}
          </p>
        </section>
      </li>
    )
  }
}

export default Octocat
