import { useState } from "react"
import SliderButton from "../base/buttons/SliderButton";
import Card from "./Card";
import $ from "jquery"

export default function Slider({ persons = [] }) {

    const [imgOrder, setImgOrder] = useState(0)
    const [maxImg, setMaxImgOrder] = useState(persons.length - 1);

    const leftBtnClick = () => {

        const slide = $(".slide")
        let width = slide.css("width").toString()
        width = width.substring(0, width.length - 2)

        if (imgOrder != 0) {
            const left = parseInt(width * (imgOrder - 1))
            slide.css("left", -left)
            setImgOrder(imgOrder - 1);
        }
        else {
            const left = parseInt(width * maxImg)

            slide.css("left", -left)
            setImgOrder(maxImg);
        }

    }

    const rightBtnClick = () => {
        const slide = $(".slide")
        let width = slide.css("width").toString()
        width = width.substring(0, width.length - 2)

        if (imgOrder != maxImg) {
            const left = parseInt(width * (imgOrder + 1))
            slide.css("left", -left)
            setImgOrder(imgOrder + 1);
        }
        else {
            slide.css("left", 0)
            setImgOrder(0);
        }
    }
    return (
        <>
            <div className="slider">
                <div className="slide">
                    {
                        persons.map((val, key) => (
                            <Card person={val} />
                        ))
                    }
                </div>
                <div className="slider-buttons">
                    <SliderButton clk={leftBtnClick} isToLeft />
                    <SliderButton clk={rightBtnClick} />
                </div>


            </div>
        </>
    )
}