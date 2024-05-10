
import { NavLink } from "react-router-dom";
import cover1 from "../../assets/covers/1.jpeg";
import cover2 from "../../assets/covers/2.jpeg";
import home_img from "../../assets/home_img.jpeg";
import like from "../../assets/like.svg";
import order from "../../assets/order.svg";
import Card from "./Card";

function Home(){
    
    return(
        <div className="p-10">
            
            <div className="relative w-full bg-gray-500 min-h-screen overflow-hidden">
                <div className="absolute text-white z-20 bottom-32 left-64">
                    <p className="text-5xl ml2">
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
                    <div className="w-full flex flex-col gap-16 justify-center items-center">

                        <NavLink to={"/book"} className="w-full flex justify-end pr-16 text-2xl font-bold hover:text-gray-500">See more</NavLink>

                        <div className="flex gap-8 flex-wrap">
                            
                            <Card cover={cover1} title={"The last four Things"} author={"by Paul HoffMan"} like={like} order={order} />
                            <Card cover={cover2} title={"Daughter Of Man"} author={"Some author"} like={like} order={order} />
                            <Card cover={cover1} title={"The last four Things"} author={"by Paul HoffMan"} like={like} order={order} />

                        </div>                        

                    </div>
                </div>

            </div>

            <script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/2.0.2/anime.min.js"></script>

        </div>
    )
}

export default Home;