import sort from "../../assets/sort.svg";
import filter from "../../assets/filter.svg"

function Book(){
    return(
        <div className="px-10 min-h-screen">

            <div className="flex items-center gap-4">
                <img className="w-8 h-8 cursor-pointer" src={filter} alt="param" />
                <img className="w-8 h-8 cursor-pointer" src={sort} alt="order" />
            </div>
            <div>
                
            </div>

        </div>
    )
}

export default Book;