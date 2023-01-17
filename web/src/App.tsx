import "./styles/global.css";

import { Habit } from "./components/Habit";

function App() {
  return (
    <>
      <h1>Hello World</h1>
      <Habit completed={1} />
      <Habit completed={8} />
      <Habit completed={6} />
      <Habit completed={2} />
      <Habit completed={9} />
    </>
  );
}

export default App;
