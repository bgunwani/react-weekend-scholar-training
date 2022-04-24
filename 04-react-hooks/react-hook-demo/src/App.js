// import { LifeCycleMethodDemoOne } from "./LifeCycleMethodDemoOne";
// import { LifeCycleMethodDemoTwo } from "./LifeCycleMethodDemoTwo";
// import { ClassCounter } from "./useEffect-Hook/ClassCounter";
// import { HookCounter } from "./useEffect-Hook/HookCounter";

import { HookFetchingData } from "./useEffect-Hook/HookFetchingData";
import { HookFetchingDataByHandler } from "./useEffect-Hook/HookFetchingDataByHandler";
import { HookFetchingDataByParam } from "./useEffect-Hook/HookFetchingDataByParam";

function App() {
  return (
    <>
      {/* <h2>App Component</h2> */}
      {/* <LifeCycleMethodDemoOne /> */}
      {/* <LifeCycleMethodDemoTwo /> */}

      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}

      {/* <HookFetchingData /> */}
      {/* <HookFetchingDataByParam /> */}
      <HookFetchingDataByHandler />
    </>
  );
}

export default App;
