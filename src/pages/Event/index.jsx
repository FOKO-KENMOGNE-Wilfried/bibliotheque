import cover1 from "../../assets/covers/1.jpeg";
import cover2 from "../../assets/covers/2.jpeg";
import like from "../../assets/like.svg";
import order from "../../assets/order.svg";
import Card from "../Home/Card";

function Event(){
    return(
        <div className="min-h-screen p-10 flex flex-col justify-center items-center gap-16">
            
            <div className="flex flex-col gap-8 items-center">
                <p className="text-2xl font-bold">Comming Soon</p>
                <div className="flex gap-4 flex-wrap items-center justify-center xl:justify-start">
                    <Card order={order} like={like} cover={cover2} title={"Title"} author={"author"} />
                    <Card order={order} like={like} cover={cover1} title={"Title"} author={"author"} />
                    <Card order={order} like={like} cover={cover2} title={"Title"} author={"author"} />
                    <Card order={order} like={like} cover={cover1} title={"Title"} author={"author"} />
                    <Card order={order} like={like} cover={cover2} title={"Title"} author={"author"} />
                </div>
            </div>
            <div className="flex flex-col gap-8 items-center">
                <p className="text-2xl font-bold">Past Events</p>
                <div className="flex gap-4 flex-wrap items-center  justify-center xl:justify-start">
                    <Card order={order} like={like} cover={cover1} title={"Title"} author={"author"} />
                    <Card order={order} like={like} cover={cover2} title={"Title"} author={"author"} />
                    <Card order={order} like={like} cover={cover1} title={"Title"} author={"author"} />
                    <Card order={order} like={like} cover={cover2} title={"Title"} author={"author"} />
                    <Card order={order} like={like} cover={cover1} title={"Title"} author={"author"} />
                </div>
            </div>

        </div>
    )
}

export default Event;