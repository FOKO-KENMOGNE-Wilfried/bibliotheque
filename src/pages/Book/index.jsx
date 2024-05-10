import sort from "../../assets/sort.svg";
import filter from "../../assets/filter.svg"
import Card from "../Home/Card";
import cover1 from "../../assets/covers/1.jpeg";
import cover2 from "../../assets/covers/2.jpeg";
import like from "../../assets/like.svg";
import order from "../../assets/order.svg";

function Book(){
    return(
        <div className="px-10 min-h-screen w-full flex flex-col gap-16 mb-20">

            <div className="flex items-center gap-4">
                <img className="w-8 h-8 cursor-pointer" src={filter} alt="param" />
                <img className="w-8 h-8 cursor-pointer" src={sort} alt="order" />
            </div>
            <div className="flex items-center flex-wrap gap-4 justify-center 2xl:justify-start">

                <Card cover={cover1} like={like} order={order} title={"Title"} author={"author"} />
                <Card cover={cover2} like={like} order={order} title={"Title"} author={"author"} />
                <Card cover={cover1} like={like} order={order} title={"Title"} author={"author"} />
                <Card cover={cover2} like={like} order={order} title={"Title"} author={"author"} />
                <Card cover={cover1} like={like} order={order} title={"Title"} author={"author"} />
                <Card cover={cover2} like={like} order={order} title={"Title"} author={"author"} />
                <Card cover={cover1} like={like} order={order} title={"Title"} author={"author"} />
                <Card cover={cover2} like={like} order={order} title={"Title"} author={"author"} />
                <Card cover={cover1} like={like} order={order} title={"Title"} author={"author"} />

            </div>

        </div>
    )
}

export default Book;