import { Route, Routes } from "react-router";
import Layout from "./Pages/Layout";
import Start from "./Pages/Start/Start";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Start />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
