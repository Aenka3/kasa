import { useState } from 'react';

import '../css/Collapse.css';

import arrow from '../img/arrow.svg';

export default function Collapse({title, content}) {

    const [toggle, setToggle] = useState(false);

    return (

        <div>
            <div className="collapse" >
                <h3 className='collapse_title' onClick={() => setToggle(!toggle)}>
                    {title}
                    <span className={ toggle ? 'collapse_arrow collapse_arrow_up' : 'collapse_arrow collapse_arrow_down' }>
                        <img src={arrow} alt="show content"/>
                    </span>
                </h3>
                <div className={ toggle ? 'collapse_content_show' : 'collapse_content' }>
                    {Array.isArray(content) ? content.map((item, index) => {

                        return (

                            <p key={index}>{item}</p>
                        )
                    }) : content
                    }
                </div> 
            </div>
        </div>
    )
}