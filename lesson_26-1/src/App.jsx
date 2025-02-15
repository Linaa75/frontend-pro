import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [items, setItems] = useState([
    { 
      id: 1, 
      emoji: "🥳", 
      result: 0 
    },
    { 
      id: 2, 
      emoji: "🤗", 
      result: 0 
    },
    { 
      id: 3, 
      emoji: "😄", 
      result: 0 
    },
    { 
      id: 4, 
      emoji: "😉", 
      result: 0 
    },
    { 
      id: 5, 
      emoji: "🥰", 
      result: 0 
    }
  ]);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    const storedVotes = localStorage.getItem("emojiVotes");
    if (storedVotes) {
      setItems(JSON.parse(storedVotes));
    }
  }, []);

  useEffect(() => {
    if (items.length > 0) {
      localStorage.setItem("emojiVotes", JSON.stringify(items));
    }
  }, [items]);

  const votesHandler = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, result: item.result + 1 } : item
    );
    setItems(updatedItems);
  };

  const showResultsHandler = () => {
    const maxVotes = Math.max(...items.map((item) => item.result));
    const winner = items.find((item) => item.result === maxVotes);
    setWinner(winner);
  };

  const clearResultsHandler = () => {
    const resetItems = items.map((item) => ({ ...item, result: 0 }));
    setItems(resetItems);
    setWinner(null);
    localStorage.setItem("emojiVotes", JSON.stringify(resetItems));
  };

  return (
    <>
      <div className="container">
      <h1>Голосування за найкращий смайлик</h1>
      <div className="container-emoji">
        {items.map((item) => (
          <div key={item.id} onClick={() => votesHandler(item.id)}>
            <p className="item-emoji">
              {item.emoji}
              <span className="item-result">{item.result}</span>
            </p>
          </div>
        ))}
      </div>
      <div className="container-btns">
        <button onClick={showResultsHandler}>Show results</button>
        <button onClick={clearResultsHandler}>Clear</button>
      </div>
      <div className="container-result">
        <p className="result-title">Результати голосування:</p>
        {winner && (
          <div>
            <p>Переможець: {winner.emoji}</p>
            <p>Кількість голосів {winner.result}</p>
          </div>
        )}
      </div>
    </div>
    </>
  )
}

export default App
