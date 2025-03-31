import React from "react";
import Button from "../Button";

const App = () => {
  return (
    <div className="flex items-center justify-center gap-3 h-screen">
      <Button>Default</Button>
      <Button type="primary">Primary</Button>
      <Button type="dashed">Dashed</Button>
    </div>
  );
};

export default App;
