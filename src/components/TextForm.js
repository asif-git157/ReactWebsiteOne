import React, {useState} from 'react'

export default function TextForm(props) {
     const handleUpClick = ()=>{
        console.log("Uppercase button was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase", "success");
     }

     const handleLoClick = ()=>{
        console.log("Lower case button was clicked");
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase", "success");
     }

     const handleClearClick = ()=>{
        let newText = '';
        setText(newText)
     }

     const handleOnChange = (event)=>{
        console.log("handle On Change Called");
        setText(event.target.value);
     }
 
     const [text, setText] = useState('Enter text here');
    return (
        <div>
            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
                    <button className="btn btn-primary my-3" onClick={handleUpClick}>Convert to upper case</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleLoClick}>Convert to lower case</button>
                    <button className="btn btn-primary my-3 mx-2" onClick={handleClearClick}>Clear Text</button>
                </div>
            </div>

            <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
            <h3>Your Text Summary</h3>
            <p>{text.split(" ").length} words and {text.length} characters.</p>
            <p className="my-80">It will take {0.008 * text.split(" ").length} minutes to read.</p>
            <h3>Preview</h3>
            <p>{text.length>0?text:"Enter something in the textbox above to preview here"}</p>
            </div>

        </div>
    )
}
