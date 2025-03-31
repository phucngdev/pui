import React from "react";
import "./App.css";
import Button from "./components/button/Button";

function App() {
  const handleClick = () => {
    console.log("Button clicked");
  };
  return (
    <>
      <div className="flex items-center justify-center gap-3 h-screen">
        <Button disabled>Default disabled</Button>
        <Button disabled type="primary">
          Primary disabled
        </Button>
        <Button disabled type="dashed">
          Dashed disabled
        </Button>
      </div>
    </>
  );
}

export default App;
