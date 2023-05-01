import { createRef, useState, useEffect, useRef } from "react";

import '../css/Slider.css';

import arrowLeft from "../img/arrow_left.svg";
import arrowRight from "../img/arrow_right.svg";

export default function Slider({imageSlider}) {

    const slider = createRef(); //ref slider
    const [position, setPosition] = useState(1); // position dans les images
    const [width, setWidth] = useState(); // largeur slider
    const [transitionTime, setTransitionTime] = useState(); // transition changement de slide
    const [auto, setAuto] = useState(true); // Pour désactiver auto si reprise de controle par l'utilisateur
    const savedIntervalId = useRef(); // A priori seul moyen d'utiliser normalement setInterval dans react ^^

    const length = imageSlider.length;

    function handleResize() {

        setTransitionTime(0); // pour que les dimensions se mettent a jour instant
        setWidth(slider.current.clientWidth); // maj largeur slider
    }
    
    useEffect(() => {

        window.addEventListener("resize", handleResize); // évènement au changement de dimension de la page
        handleResize();
        return () => window.removeEventListener("resize", handleResize); // suppression de l'évènement
    });

    //const [boucle, setBoucle] = useState(0); Utilisé pour travailler sur autoplay

    function autoPlay() {

        setTransitionTime(0.4);
        setPosition(position === length ? 1 : position + 1);
        //setBoucle(boucle + 1);
        //console.log(boucle);
    }

    useEffect(() => {

        savedIntervalId.current = autoPlay;
    });

    useEffect(() => {

        function tick() {

            if (auto && length > 1) {

                savedIntervalId.current();
            };
        };
        let intervalId = setInterval(tick, 5000);
        return () => clearInterval(intervalId);
    }, [auto, length]);

    const nextSlide = () => {

        setAuto(false);
        setTransitionTime(0.4);
        setPosition(position === length ? 1 : position + 1);
    };

    const prevSlide = () => {

        setAuto(false);
        setTransitionTime(0.4);
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