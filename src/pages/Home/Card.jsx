import { NavLink } from "react-router-dom";


function Card({cover, title, author, like, order}){
    return(
        <div className=" bg-gray-200 p-4 rounded-md flex flex-col gap-4">
            <img className="w-64 h-96" src={cover} alt="cover" />
            <div className=" flex flex-col justify-center items-center">
                <p className=" font-bold">{ title }</p>
                <p className=" -mt-1">{ author }</p>
            </div>
            <div className="w-full flex justify-between">
                <img className="w-8 h-8" src={like} alt="like" />
                <NavLink to={""}>
                    <img className="w-8 h-8" src={order} alt="order" />
                </NavLink>
            </div>
        </div>
    )
}

export default Card;