import { useState } from "react";
import "./HookExample.css";

export const HookExample = () => {
    const [color, setColor] = useState(true)
    return (
        <>
        <div className= {`main-div ${ color ? 'red-background' :  'green-background' }`} ></div>
        <button onClick={() => setColor(!color) }>Cambiar Color</button>
        </>
    )
}