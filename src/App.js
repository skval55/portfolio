import logo from "./logo.svg";
import "./App.css";
import Name from "./Name";

function App() {
  return (
    <div className="App bg-zinc-900 h-screen">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>

      <Name />
      <p>I am a software developer</p>
    </div>
  );
}

export default App;
