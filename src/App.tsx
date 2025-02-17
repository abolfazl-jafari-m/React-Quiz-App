import {Route, Routes} from "react-router";
import Layout from "./Pages/Layout";
import Start from "./Pages/Start/Start";
import Setup from "./Pages/Setup/Setup.tsx";
import Questions from "./Pages/Questions/Questions.tsx";
import Result from "./Pages/Result/Result.tsx";

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Start/>}/>
                    <Route path={"/setup"} element={<Setup/>}/>
                    <Route path={"/questions"} element={<Questions/>}/>
                    <Route path={"/result"} element={<Result/>}/>
                </Route>
            </Routes>
        </>
    );
}

export default App;
