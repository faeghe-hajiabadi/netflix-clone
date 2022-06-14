import React, { useEffect, useState } from "react";
import "./App.scss";
import TopMenu from "./components/TopMenu/TopMenu";
import MainTrailer from "./components/Video/MainTrailer/MainTrailer";
import { fetchData } from "./Services/Api";

function App() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const test = fetchData();
    setMovie(test);
    console.log("movie", movie);
  }, []);
  console.log("movie");
  return (
    <div className="Container">
      <TopMenu />
      <MainTrailer />
    </div>
  );
}

export default App;
