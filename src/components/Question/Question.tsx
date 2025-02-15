import RadioButton from "../Base/RadioButton/RadioButton.tsx";


function Question() {
    return (
        <div className={"flex flex-col gap-14 p-3 "}>
            <div className={"bg-white rounded-lg shadow-lg  shadow-black px-10 py-5 w-full text-xl font-sans"}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos facilis magnam nihil ut?
                Consequatur dolore quae repellat sequi unde? Numquam, porro.
            </div>
            <div className={"grid grid-cols-2 gap-5 items-center"}>
                <RadioButton label={"answe"} id={"ssf"} value={"s"} name={"awnser"} onClick={()=>{}}/>
            </div>
        </div>
    );
}

export default Question;