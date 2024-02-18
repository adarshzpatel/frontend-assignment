import Layout from "./components/shared/Layout";
import TodaysTasks from "./components/tasks/TodaysTasks";
import Time from "./components/time/Time";
import Preview from "./components/preview/Preview";
import AiModels from "./components/models/AiModels";

const App = () => {
  return (
    <Layout
      leftPane={<TodaysTasks />}
      rightPane={<Time />}
      middlePane={<AiModels />}
      bottomPane={<Preview />}
    />
  );
};

export default App;
