import "./App.css";
import Card from "./components/Card";

function App() {
  return (
    <>
      <h1 className="text-3xl font-bold bg-green-500 p-3 rounded-md">
        React + Vite with Tailwind CSS
      </h1> <br/>
      <Card username="amit"/> <br/>
      <Card username="jerry" post="software engineer"/> <br/>
      <Card />
    </>
  );
}

export default App;
