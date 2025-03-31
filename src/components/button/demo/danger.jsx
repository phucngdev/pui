import React from "react";
import Button from "../Button";

const App = () => {
  return (
    <div className="flex items-center justify-center gap-3 h-screen">
      <Button danger>Default danger</Button>
      <Button type="primary" danger>
        Primary danger
      </Button>
      <Button type="dashed" danger>
        Dashed danger
      </Button>
    </div>
  );
};

export default App;
