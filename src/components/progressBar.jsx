import { useState } from 'react';
import './progressBar.css'
import { useEffect } from 'react';


let PROGRESSBAR = () => {
    const[percentage , setPercentage] = useState(0);

    useEffect(() => {
        let timeout = setTimeout(() => {
            if(percentage < 100){
                setPercentage((prev) => prev + 1);
            }
            else{
                clearTimeout(timeout);
            }
        } , 150)

        return () => {clearTimeout(timeout)}
    }, [percentage])

    let widths = {
        width : `${percentage}%`,
        transition : "width 0.5s ease"
    }

    return (
       
        <div className="progressbar">
            <h1>Progress Bar</h1>
            <div className="bar">
                <div className="color" style={widths}></div>
                <p style={{color : (percentage >= 50) ? "white" : ""}}>{percentage}%</p>
            </div>
            <p style={{display : (percentage <= 99) ? "block" : "none"}}>Loading...</p>
            <p style={{display : (percentage == 100) ? "block" : "none"}}>Completed!!</p>
       </div>
       
    )
}


export default PROGRESSBAR;