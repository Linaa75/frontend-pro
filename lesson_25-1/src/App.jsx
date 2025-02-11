import { useState } from "react";
import "./App.css";
import { useEffect } from "react";

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

  const [winner, setWinner] = useState(); 

  const votesHandler = id => {
    setItems(prevItems => {
      return prevItems.map(item => item.id === id ? {...item, result: item.result + 1 } : item)
    });
  } 

  useEffect(() => {
    localStorage.setItem("emojiVotes", JSON.stringify(items));
  }, [items]);

  const showResultsHandler = () => {
    const maxVotes = Math.max(...items.map(itemMax => itemMax.result));
    const winner = items.find(itemWin => itemWin.result === maxVotes); 
    setWinner(winner);
  }

  const clearResultsHandler = () => {
    const resetItems = items.map(itemReset => ({...itemReset, result: 0}));
    setItems(resetItems);
    setWinner(null);
    localStorage.setItem("emojiVotes", JSON.stringify(resetItems));
  }

  return (
    <>
    <div className="container">
      <h1>Голосування за найкращий смайлик</h1>
      <div className="container-emoji">
          {
            items.map(item => (
              <div key={item.id} onClick={() => votesHandler(item.id)}>
                <p className="item-emoji">{item.emoji}
                <span className="item-result">{item.result}</span></p></div>
            ))
          }
      </div>
      <div className="container-btns">
        <button onClick={showResultsHandler}>Show results</button>
        <button onClick={clearResultsHandler}>Clear</button>
      </div>
      <div className="container-result">
        <p className="result-title">Результати голосування:</p>
        { winner && <div>
          <p>Переможець: {winner.emoji}</p>
          <p>Кількість голосів {winner.result}</p>
        </div>
        }
      </div>
    </div>
    </>
  )
}

export default App
