import React, { Component } from "react"

class NavBar extends Component {
  render() {
    return (
      <nav>
        <section className="top-bar">
          <h1>Octodex</h1>
          <ul className="left-side">
            <li>Home</li>
            <li>FAQ</li>
          </ul>
        </section>
        <ul className="right-side">
          <li>Follow us on Twitter</li>
          <li className="nav-back">Back to GitHub.com</li>
        </ul>
      </nav>
    )
  }
}

export default NavBar
