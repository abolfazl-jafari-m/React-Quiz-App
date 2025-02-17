import {PacmanLoader} from "react-spinners";


function Loading() {
    return (
        <div
            className={"flex items-center flex-col justify-center w-full gap-4 h-screen fixed bg-teal-950 top-0 left-0"}>
            <PacmanLoader size={"60px"} color={'#0ea5e9'}/>
            <span className={"text-white w-100px"}>Please Wait...</span>
        </div>
    );
}

export default Loading;