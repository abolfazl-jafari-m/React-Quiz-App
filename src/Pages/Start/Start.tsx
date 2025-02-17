import {useNavigate} from "react-router";
import Button from "../../components/Base/Button/Button.tsx";
import {FaCaretDown} from "react-icons/fa";

function Start() {
    const navigate = useNavigate();
    return (
        <div className={"flex items-center h-full dark:text-white  flex-col gap-5 justify-between"}>
            <div className={"w-1/2"}>
                <h2 className={"text-6xl font-bold tracking-widest animate-typewriter overflow-hidden text-nowrap border-r-4 border-black dark:border-white text-center "}>Welcome
                    To NV QUIZ</h2>
            </div>
            <div className={"flex flex-col gap-2 items-center"}>
                <span className={"text-lg"}>Start Your Journey</span>
                <FaCaretDown className={"animate-bounce text-2xl"} />
                <Button label={"Getting Start"}
                        className={"dark:bg-lime-600 bg-green-700 text-white  py-2 px-8 rounded-md shadow-lg shadow-black cursor-pointer "}
                        onClick={() => navigate("/setup")}/>
            </div>
        </div>
    )
}

export default Start