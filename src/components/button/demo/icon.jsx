import React from "react";
import Button from "../Button";

const App = () => {
  return (
    <div className="flex items-center justify-center gap-3 h-screen">
      <Button danger icon={<></>}>
        Default danger
      </Button>
      <Button type="primary" icon={<></>}>
        Primary
      </Button>
      <Button type="dashed" icon={<></>}>
        Dashed
      </Button>
    </div>
  );
};

export default App;
