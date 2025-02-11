import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        { id: 1, emoji: "🥳", result: 0 },
        { id: 2, emoji: "🤗", result: 0 },
        { id: 3, emoji: "😄", result: 0 },
        { id: 4, emoji: "😉", result: 0 },
        { id: 5, emoji: "🥰", result: 0 }
      ],
      winner: null
    };
  }

  componentMount() {
    const storedVotes = localStorage.getItem("emojiVotes");
    if (storedVotes) {
      this.setState({ items: JSON.parse(storedVotes) });
    }
  }

  componentUpdate(prevProps, prevState) {
    if (prevState.items !== this.state.items) {
      localStorage.setItem("emojiVotes", JSON.stringify(this.state.items));
    }
  }

  votesHandler = id => {
    this.setState(prevState => {
      const updatedItems = prevState.items.map(item =>
        item.id === id ? { ...item, result: item.result + 1 } : item
      );
      return { items: updatedItems };
    });
  };

  showResultsHandler = () => {
    const maxVotes = Math.max(...this.state.items.map(item => item.result));
    const winner = this.state.items.find(item => item.result === maxVotes);
    this.setState({ winner });
  };

  clearResultsHandler = () => {
    const resetItems = this.state.items.map(item => ({ ...item, result: 0 }));
    this.setState({ items: resetItems, winner: null });
    localStorage.setItem("emojiVotes", JSON.stringify(resetItems));
  };

  render() {
    return (
      <div className="container">
        <h1>Голосування за найкращий смайлик</h1>
        <div className="container-emoji">
          {this.state.items.map(item => (
            <div key={item.id} onClick={() => this.votesHandler(item.id)}>
              <p className="item-emoji">
                {item.emoji}
                <span className="item-result">{item.result}</span>
              </p>
            </div>
          ))}
        </div>
        <div className="container-btns">
          <button onClick={this.showResultsHandler}>Show results</button>
          <button onClick={this.clearResultsHandler}>Clear</button>
        </div>
        <div className="container-result">
          <p className="result-title">Результати голосування:</p>
          {this.state.winner && (
            <div>
              <p>Переможець: {this.state.winner.emoji}</p>
              <p>Кількість голосів {this.state.winner.result}</p>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default App;
