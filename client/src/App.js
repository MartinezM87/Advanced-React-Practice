import React, { Component } from 'react';
import axios from "axios";
import './App.css';
import PlayerCard from "./components/PlayerCard.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      players: []
    }
  }


  object = {
    practice: {
      number: 1
    }
  };


  componentDidMount() {
    axios.get('http://localhost:5000/api/footballers')
      .then(res => {
        this.setState({ players: res.data });
      })
      .catch()
  }


  render() {
    return (
      <div className="App">
        <h1>Happy building <span role="img" aria-label="Smiling emoji">😃</span></h1>
      {this.state.players.map(player => (
        <PlayerCard key={player.id} player = {player} />
      ))}
      </div>
    );
  }
}

export default App;
