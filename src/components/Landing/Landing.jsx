import React, { useState } from "react";
import { Link } from "react-router-dom";
import '../Landing/Landing.css';
import imagen from '../../images/PRESS_START.png';


function Landing() {

    const [mostrar, setMostrar] = useState(false)

    const loading = () => {
        setMostrar(!mostrar);
    }
    return (
        <div className="landingImg">
            <img onLoad={loading} src={imagen} className={`${mostrar ? "showLanding" : "hideLanding"}`} alt=""/>
            <div className="landingText">
                <h1>HENRY VIDEOGAMES</h1>
                <Link to={'/home'} className={'startButton'}>
                    <button>PRESS START</button>
                </Link>
            </div>
        </div>
    )
}

export default Landing