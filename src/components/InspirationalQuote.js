import React, {useState, useEffect} from "react";
import axios from "axios";
import boxicons from "boxicons"

export default function InspirationalQuote(){
    const [quote, setQuote] = useState("You've got this")

    
return (
    <div>
        <h1>{quote}</h1>
        <box-icon name="cheese"></box-icon>
    </div>
)
}