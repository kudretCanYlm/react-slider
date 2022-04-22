import {
    BsChevronLeft,
    BsChevronRight
} from "react-icons/bs"

const SliderButton = ({ isToLeft = false,clk=f=>f }) => {
    return (
        <button onClick={clk} className="btn btn-slider">
            {
                isToLeft ? (<BsChevronLeft  />) : (<BsChevronRight />)
            }
        </button>
    )
}

export default SliderButton