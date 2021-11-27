import React from "react";
import preloadAnimation from "./PreloadGradient.gif"

const preloader = (props) => {
    return <div>
        <img src={preloadAnimation} alt="preload animation" />
    </div>
}

export default preloader;