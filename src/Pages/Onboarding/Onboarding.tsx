import {useEffect} from "react";
import {useNavigate} from "react-router";
import {PacmanLoader} from "react-spinners";


function Onboarding() {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate("/start")
        }, 5000)
    }, []);
    return (
        <div className={"flex items-center justify-center flex-col gap-10 p-10 max-md:p-5 "}>
            <h3 className={"text-3xl dark:text-white  max-lg:text-xl max-sm:text-xs"}>Please Wait a Few Moment...</h3>
            <PacmanLoader size={"50px"} color={"#0e7490"} speedMultiplier={1}/>
        </div>
    );
}

export default Onboarding;