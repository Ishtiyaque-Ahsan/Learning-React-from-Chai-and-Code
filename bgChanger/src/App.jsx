// import { useState } from 'react'
//import reactLogo from './assets/react.svg'
//import viteLogo from '/vite.svg'
//import './App.css'

import { useState } from "react";

function App() {
  const [color, setcolor] = useState("olive"); // useState hook is used when needed to reflect change in UI

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
          <button
            onClick={() => setcolor("red")}
            className="outline-none px-4 rounded-full text-white shadow-lg py-1"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>

          <button
            onClick={() => setcolor("green")} // have to write func of useState in this way only b/c it needs parameters
            className="outline-none px-4 rounded-full text-white shadow-lg py-1"
            style={{ backgroundColor: "green" }}
          >
            Green
          </button>
          <button
            onClick={() => setcolor("yellow")}
            className="outline-none px-4 rounded-full text-grey shadow-lg py-1"
            style={{ backgroundColor: "yellow" }}
          >
            Yellow
          </button>
          <button
            onClick={() => setcolor("black")}
            className="outline-none px-4 rounded-full text-white shadow-lg py-1"
            style={{ backgroundColor: "black" }}
          >
            Black
          </button>
          <button
            onClick={() => setcolor("white")}
            className="outline-none px-4 rounded-full text-black shadow-lg py-1"
            style={{ backgroundColor: "white" }}
          >
            White
          </button>
          <button
            onClick={() => setcolor("olive")}
            className="outline-none px-4 rounded-full text-white shadow-lg py-1"
            style={{ backgroundColor: "olive" }}
          >
            Olive
          </button>
          <button
            onClick={() => setcolor("blue")}
            className="outline-none px-4 rounded-full text-white shadow-lg py-1"
            style={{ backgroundColor: "blue" }}
          >
            Blue
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
