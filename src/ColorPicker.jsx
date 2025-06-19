
import React, {useState} from "react"

function ColorPicker(){

    const [color, setColor] = useState("#FFFFFF")

    function handleColorChange(event){
        setColor(event.target.value);
    }

    return(
        <div className="container">
            <h1 className="title">ColorPicker</h1>
            <div className="color-box" style={{backgroundColor: color, width: '150px', height: '150px', margin: '10px 0'}}>
                <p>Selected Color: {color}</p>
            </div>
            <label htmlFor="colorInput">Select a Color</label>
            <input type="color" value={color} onChange={handleColorChange}/>
        </div>
    );
}

export default ColorPicker