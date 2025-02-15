import {Route, Routes} from "react-router";
import Layout from "./Pages/Layout";
import Start from "./Pages/Start/Start";
import Setup from "./Pages/Setup/Setup.tsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Start/>}/>
                    <Route path={"/setup"} element={<Setup/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
