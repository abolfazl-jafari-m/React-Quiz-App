import {Route, Routes} from "react-router";
import Layout from "../Pages/Layout.tsx";
import Onboarding from "../Pages/Onboarding/Onboarding.tsx";
import Start from "../Pages/Start/Start.tsx";
import Setup from "../Pages/Setup/Setup.tsx";
import Questions from "../Pages/Questions/Questions.tsx";
import Result from "../Pages/Result/Result.tsx";



function Router() {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<Onboarding/>}/>
                <Route path={"/start"} element={<Start/>}/>
                <Route path={"/setup"} element={<Setup/>}/>
                <Route path={"/questions"} element={<Questions/>}/>
                <Route path={"/result"} element={<Result/>}/>
            </Route>
            {/*<Route path={"*"} element={<NotFound/>}/>*/}
        </Routes>
    );
}

export default Router;