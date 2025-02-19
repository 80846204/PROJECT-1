import React, {useState} from 'react'
export default function TextForm(props) {
  const handleUpClick  = ()=>{
    //console.log("Uppercase was clicked"+ text);
    let newText =text.toUpperCase();
    setText(newText)
    props.showAlert("converted to uppercase!","success");
  }

 const handleInverseClick = () => {
  let newText = text
    .split("")
    .reverse() // Reverse the string after inverting the case
    .join("");

  setText(newText);
  props.showAlert("Reversed the text!","success")
};


  const handleClearClick  = ()=>{
    // console.log("Uppercase was clicked"+ text);
    let newText ='';
    setText(newText)
    props.showAlert("Cleared the text!","success");

  }
  const handleLoClick  = ()=>{
    //console.log("Uppercase was clicked"+ text);
    let newText =text.toLowerCase();
    setText(newText)
    props.showAlert("converted to lowercase!","success");

  }

  
  const handleOnChange  = (event)=>{
  //  console.log("On change");
    setText(event.target.value)
  }
  const [text, setText] = useState('');
  //text="text";  // Wrong way to change the state
  //setText("new text"); //Correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
     <h1>{props.heading}</h1>
     <div className="mb-3">
     <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='light'?'grey':'white',color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
     </div>
     <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Uppercase</button>     
     <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>   
     <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
     <button className="btn btn-primary mx-1" onClick={handleInverseClick}>Inverse </button>
    </div>
    <div className ="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h2>Your text summary </h2>
      <p>
        {text.split(" ").length} words and {text.length} characters </p>
        <p>{0.008 * text.split(" ").length} minutes read </p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something to priview it here"}</p>      

    </div>
    </>
  )
}
