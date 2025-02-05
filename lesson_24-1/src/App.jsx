import { useEffect } from "react";
import { useState } from "react";

function App() {
  const [filmData, setFilmData] = useState();

  const getPeopleHandler = async () => {
    try {
      const data = await fetch("https://swapi.dev/api/people");
      const response = await data.json();
      setFilmData(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getPeopleHandler();
  }, []);

  return <>
    <ul className="list-group" >
      {
        filmData && filmData.results.map(item => {
          return (
            <li key={item.name} className="list-group-item text-success">
              {item.name}
            </li>
          )
        })
      }
    </ul>
  </>
}

export default App;
