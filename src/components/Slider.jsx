import { createRef, useState, useEffect } from "react";

import '../css/Slider.css';

import arrowLeft from "../img/arrow_left.svg";
import arrowRight from "../img/arrow_right.svg";

export default function Slider({imageSlider}) {

    const slider = createRef(null); //ref slider
    const [position, setPosition] = useState(1); // position dans les images
    const [width, setWidth] = useState(0); // largeur slider
    const [transitionTime, setTransitionTime] = useState(0); // transition changement de slide
    const [auto, setAuto] = useState(false); // tentative auto abandonnée

    const length = imageSlider.length;

    function handleResize() {

        setTransitionTime(0); // pour que les dimensions se mettent a jour instant
        setWidth(slider.current.clientWidth); // vérification largeur slider
    }
    
    useEffect(() => {
        window.addEventListener("resize", handleResize);
        handleResize();
    
        return () => window.removeEventListener("resize", handleResize);
    });

    const nextSlide = () => {

        setTransitionTime(0.5);
        setPosition(position === length ? 1 : position + 1);
    };

    const prevSlide = () => {

        setTransitionTime(0.5);
        setPosition(position === 1 ? length : position - 1);
    };

    return (

        <div className='slider' ref={slider}>
            
            {imageSlider.map((picture, index) => {
                return (
                    <img
                        key={picture}
                        src={picture}
                        alt=""
                        className="slider_slide"
                        style={{ left: `${width * (index - (position - 1))}px`,
                                 transition: `left ${transitionTime}s ease-in-out`,
                        }}
                    />
                )
            })}

            {imageSlider.length > 1 && // si plusieurs image dans le slider alors
                <>
                    <img
                        className='slider_arrow slider_arrow_left'
                        src={arrowLeft}
                        alt="show previous slider"
                        onClick={prevSlide}
                    />

                    <img
                        className='slider_arrow slider_arrow_right'
                        src={arrowRight}
                        alt="show next slider"
                        onClick={nextSlide}
                    />

                    <p className='slider_counter'>
                        {position} / {length}
                    </p>
                </>
            } 
        </div>
    );
};