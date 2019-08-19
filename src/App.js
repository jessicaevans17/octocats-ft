import React, { Component } from "react"
import CreateOctoCat from "./components/CreateOctoCat"
import NavBar from "./components/NavBar"

class App extends Component {
  render() {
    return (
      <section>
        <NavBar />
        <main>
          <CreateOctoCat />
        </main>
      </section>
    )
  }
}

export default App
