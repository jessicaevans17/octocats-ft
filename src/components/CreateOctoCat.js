import React, { Component } from "react"
import Octocat from "./Octocat"

import baracktocat from "../images/baracktocat.jpg"
import bewitchedtocat from "../images/bewitchedtocat.jpg"
import codercat from "../images/femalecodertocat.png"
import gobblecat from "../images/gobbleotron.gif"
import grinchtocat from "../images/grinchtocat.gif"
import minertocat from "../images/minertocat.png"
import monalovelace from "../images/mona-lovelace.jpg"
import pusheencat from "../images/pusheencat.png"

const kitties = [
  {
    imageUrl: baracktocat,
    imageAlt: "Barack Obama Cat",
    catName: "Baracktocat",
    catNumber: "#57",
    userName: "Jessica"
  },
  {
    imageUrl: bewitchedtocat,
    imageAlt: "Witch Cat",
    catName: "Bewitchedtocat",
    catNumber: "#127",
    userName: "Jessica"
  },
  {
    imageUrl: codercat,
    imageAlt: "Lady coder cat",
    catName: "Femalecodertocat",
    catNumber: "#103",
    userName: "Jessica"
  },

  {
    imageUrl: gobblecat,
    imageAlt: "Turkey Cat",
    catName: "Gobble-o-tron",
    catNumber: "#120",
    userName: "Jessica"
  },
  {
    imageUrl: grinchtocat,
    imageAlt: "Grinch Cat",
    catName: "Grinch Cat",
    catNumber: "#111",
    userName: "Jessica"
  },
  {
    imageUrl: minertocat,
    imageAlt: "Miner Cat",
    catName: "Miner Cat",
    catNumber: "#118",
    userName: "Jessica"
  },
  {
    imageUrl: monalovelace,
    imageAlt: "Mona Love Lace Cat",
    catName: "Mona Lovelace",
    catNumber: "#133",
    userName: "Jessica"
  },
  {
    imageUrl: pusheencat,
    imageAlt: "Pusheen-style Octocat",
    catName: "Pusheencat",
    catNumber: "#85",
    userName: "Jessica"
  }
]

class CreateOctoCat extends Component {
  render() {
    return (
      <ul className="cat-list">
        {kitties.map(kitty => {
          return (
            <Octocat
              imageUrl={kitty.imageUrl}
              imageAlt={kitty.imageAlt}
              catName={kitty.catName}
              catNumber={kitty.catNumber}
              userName={kitty.userName}
            />
          )
        })}
      </ul>
    )
  }
}

export default CreateOctoCat
