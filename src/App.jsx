import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import React from "react";
import "./App.css";
import Button from "./components/Button";

function App() {
  const handleClick = () => {
    console.log("Button clicked");
  };
  return (
    <>
      <div className="flex items-center justify-center gap-3 h-screen">
        <Button type="primary">Primary</Button>
        <Button>Default</Button>
        <Button type="primary" danger>
          Primary danger
        </Button>
        <Button danger>Default danger</Button>
        <Button type="dashed" danger>
          Dashed danger
        </Button>
        <Button type="dashed">Dashed</Button>
      </div>
    </>
  );
}

export default App;
