import {useNavigate} from "react-router";
import Button from "../../components/Base/Button/Button.tsx";
function Start() {
  const navigate = useNavigate();
  return (
    <div className={"flex items-center h-1/2 dark:text-white mt-16 flex-col gap-5 justify-between"}>
      <h2 className={"text-6xl font-bold tracking-widest "}>Welcome To NV QUIZ</h2>
      <Button label={"Getting Start"} className={"dark:bg-lime-600 bg-green-700 text-white  py-2 px-8 rounded-md shadow-lg shadow-black cursor-pointer "}  onClick={()=>navigate("/setup")}/>
    </div>
  )
}

export default Start