import React from "react";
import Layout from "./components/layout/Layout";
import TodaysTasks from "./components/tasks/TodaysTasks";
import Time from "./components/time/Time";
import AllModels from "./components/models/AllModels";
import Preview from "./components/preview/Preview";

const App = () => {
  return (
    <Layout
      leftPane={<TodaysTasks />}
      rightPane={<Time />}
      middlePane={<AllModels />}
      bottomPane={<Preview />}
    />
  );
};

export default App;
