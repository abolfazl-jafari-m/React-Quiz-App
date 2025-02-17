import {useState} from "react"
import {Outlet, useLocation} from "react-router"
import {FaMoon, FaSun} from "react-icons/fa";
import logo from "../assets/Images/logo.png";
import {motion} from "framer-motion";

function Layout() {
    const pageVariants = {
        initial: {
            opacity: 0
        },
        in: {
            opacity: 1
        },
        out: {
            opacity: 0
        }
    };
    const pageTransition = {
        type: 'tween',
        ease: 'linear',
        duration: 0.5
    };
    const [isDark, setIsDark] = useState<boolean>(false);
    const { pathname } = useLocation();
    return (
        <div className={isDark ? "dark" : ""}>
            <div className="bg-lime-300/50  dark:bg-emerald-950 w-full h-screen p-10 relative font-Sour transition duration-200 ease-in ">
                <div className={"flex flex-col items-center dark:text-white mb-10"}>
                    <img src={logo} alt={"logo"} className={"w-24"}/>
                    <h1 className="text-center text-5xl font-bold tracking-wide m-4">Quiz App</h1>
                    <p className={"text-sm opacity-60"}>nv design quiz app</p>
                </div>
                <motion.div className={"h-2/3 p-5"}
                    key={pathname}
                    initial="initial"
                    animate="in"
                    variants={pageVariants}
                    transition={pageTransition}
                >
                    <Outlet/>
                </motion.div>

                <div
                    className={"flex items-center justify-center p-2 absolute left-6 bottom-6 w-8 h-8 rounded-full bg-white cursor-pointer dark:bg-black transition duration-200 ease-in"}
                    onClick={() => setIsDark(!isDark)}>
                    {
                        isDark ?
                            <FaMoon color={"white"}/>
                            :
                            <FaSun color={"black"}/>
                    }
                </div>
            </div>
        </div>

    )
}

export default Layout