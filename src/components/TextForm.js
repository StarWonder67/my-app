import React, {useState} from 'react';

export default function TextForm(props) {

    const [text, setText] = useState("Default text")

    const handleOnClick = ()=>{
        console.log("Uppercase was clicked")
        let newText = text.toUpperCase(text)
        setText(newText)
    }

    const handleOnChange = (event)=>{
        console.log("on change")
        setText(event.target.value)
    }

  return (
    <>
    <div className='container'>
        <h1>{props.heading}</h1>
        <div className="mb-3">  
        <label htmlFor="myBox" className="form-label">Enter Text here</label>
        <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
        </div>
        <div>
            <button className = "btn btn-primary" onClick={handleOnClick}>Convert to Uppercase</button>
        </div>
    </div>
    <div className='container my-3'>
    <h1>You text summary</h1>
    <div> 
    Number of words: {text.split(" ").length}
    </div>
    <div>
    Number of characters: {text.length}
    </div>
    </div>
    </>
  );
}
