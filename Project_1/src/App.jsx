import { useState, useCallback, useEffect, useRef } from "react";
//useCallback , useEffect is used to run a functon and update the changed part directly by sensing a change in its dependencies

function App() {
  //useState hook is used to reflect changes in UI
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("");

  //useRef hook : used when you have to take something's reference
  const passwordRef = useRef(null);
  //useRef is used in this code for highlighting the copied text

  //useCallback is a React Hook that lets you cache a function definition between re-renders ; only change the updated part in function
  // useCallback(fn, dependencies)
  const passwordGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (numberAllowed) str += "0123456789";
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, numberAllowed, charAllowed, setPassword]);
//useCallback is called when page loads or there get any change in any of the dependencies of it by using useEffect
  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select();  //highlights text on copying
    passwordRef.current?.setSelectionRange(0, 999);
    window.navigator.clipboard.writeText(password);
  }, [password]);

//useEffect is used here to implicate the effect of changes in length,numberAllowed, charAlowed (given in dependencies) directly(i.e.by calling passwordGenerator() ) without any extra button to call this function for this use 
//useEffectis called when page loads or there get any change in any of the dependencies of useEffect
// if not used useEffect, make a separate button for it to apply changes on changing values or run the function at the req locations
  useEffect(() => {
    passwordGenerator();
  }, [length, numberAllowed, charAllowed, passwordGenerator]);

  return (
    <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-80 bg-gray-800 text-orange-500 ">
      <h1 className="text-white text-center my-3">Password generator</h1>
      <div className="flex shadow rounded-lg overflow-hidden mb-4">
        <input
          type="text"
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="Password"
          readOnly
          ref={passwordRef} // refrence for each input everytime
        />
        <button
          onClick={copyPasswordToClipboard}
          className="outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0"
        >
          copy
        </button>
      </div>
      <div className="flex text-sm gap-x-2">
        <div className="flex items-center gap-x-1">
          <input
            type="range"
            min={6}
            max={100}
            value={length}
            className="cursor-pointer"
            onChange={(e) => {
              setLength(e.target.value); //here you are just change the value of length and automatically passwordGenerator() is called due to useCallback and useEffcet
            }}
          />
          <label>Length: {length}</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id="numberInput"
            onChange={() => {
              setNumberAllowed((prev) => !prev); //calback : () => __
            }}
          />
          <label htmlFor="numberInput">Numbers</label>
        </div>
        <div className="flex items-center gap-x-1">
          <input
            type="checkbox"
            defaultChecked={charAllowed}
            id="characterInput"
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}
          />
          <label htmlFor="characterInput">Characters</label>
        </div>
      </div>
    </div>
  );
}

export default App;
