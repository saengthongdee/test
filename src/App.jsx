import { useState } from "react";
import "./App.css";
import Test from './components/test.jsx'
import Nav from './components/nav/page.jsx'
import Video from './components/video/page.jsx';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Nav/>
      <Test/>
      <Video/>
    </>
  );
}

export default App;
