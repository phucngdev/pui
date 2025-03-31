import React from "react";
import Button from "../Button";

const App = () => {
  return (
    <div className="flex items-center justify-center gap-3 h-screen">
      <Button danger loading>
        Default danger
      </Button>
      <Button type="primary" loading>
        Primary
      </Button>
      <Button type="dashed" loading>
        Dashed
      </Button>
    </div>
  );
};

export default App;
