import React from "react";
import Button from "../Button";

const App = () => {
  return (
    <div className="flex items-center justify-center gap-3 h-screen">
      <Button disabled>Default disabled</Button>
      <Button disabled type="primary">
        Primary disabled
      </Button>
      <Button disabled type="dashed">
        Dashed disabled
      </Button>
    </div>
  );
};

export default App;
