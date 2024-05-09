import { NavLink } from "react-router-dom";
import cover1 from "../../assets/covers/1.jpeg";
import cover2 from "../../assets/covers/2.jpeg";
import home_img from "../../assets/home_img.jpeg";
import like from "../../assets/like.svg";
import order from "../../assets/order.svg";

function Home(){
    return(
        <div className="p-10">
            
            <div className="relative w-full bg-gray-500 h-cover overflow-hidden">
                <div className="absolute text-white z-20 bottom-32 left-64">
                    <p className="text-5xl">
                        ENTER IN THE WORD OF THE KNOWLEGE
                    </p>
                </div>
                <div className="w-full h-full bg-black absolute opacity-50"></div>
                <img className="w-full h-full" src={home_img} alt="home_img" />
            </div>
            <div className="flex flex-col gap-32">

                <div className="w-full pt-8 flex flex-col justify-center items-center">
                    <h1 className="text-3xl font-bold">The most populars</h1>
                    <p className=" text-gray-500 text-xl">The besst book for the last 02 week</p>
                </div>
                <div>
                    <div className="w-full flex justify-center items-center">

                        <div className="flex gap-8 flex-wrap">
                            <div className=" bg-gray-200 p-4 rounded-md flex flex-col gap-4">
                                <img className="w-64 h-96" src={cover1} alt="cover" />
                                <div className=" flex flex-col justify-center items-center">
                                    <p className=" font-bold">The last four Things</p>
                                    <p className=" -mt-1">by Paul HoffMan</p>
                                </div>
                                <div className="w-full flex justify-between">
                                    <img className="w-8 h-8" src={like} alt="like" />
                                    <NavLink to={""}>
                                        <img className="w-8 h-8" src={order} alt="order" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className=" bg-gray-200 p-4 rounded-md flex flex-col gap-4">
                                <img className="w-64 h-96" src={cover1} alt="cover" />
                                <div className=" flex flex-col justify-center items-center">
                                    <p className=" font-bold">The last four Things</p>
                                    <p className=" -mt-1">by Paul HoffMan</p>
                                </div>
                                <div className="w-full flex justify-between">
                                    <img className="w-8 h-8" src={like} alt="like" />
                                    <NavLink to={""}>
                                        <img className="w-8 h-8" src={order} alt="order" />
                                    </NavLink>
                                </div>
                            </div>
                            <div className=" bg-gray-200 p-4 rounded-md flex flex-col gap-4">
                                <img className="w-64 h-96" src={cover1} alt="cover" />
                                <div className=" flex flex-col justify-center items-center">
                                    <p className=" font-bold">The last four Things</p>
                                    <p className=" -mt-1">by Paul HoffMan</p>
                                </div>
                                <div className="w-full flex justify-between">
                                    <img className="w-8 h-8" src={like} alt="like" />
                                    <NavLink to={""}>
                                        <img className="w-8 h-8" src={order} alt="order" />
                                    </NavLink>
                                </div>
                            </div>
                        </div>                        

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Home;