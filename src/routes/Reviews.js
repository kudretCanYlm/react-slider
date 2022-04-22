import { useContext } from "react"
import { PersonContext } from "../contexts/PersonsContext"
import Title from "../components/base/Title"
import Slider from "../components/main/Slider"

export default function Reviews() {

    const persons = useContext(PersonContext);

    return (
        <div className="reviews">
            <Title>
                Reviews
            </Title>
            <Slider persons={persons}/>
        </div>
    )
}