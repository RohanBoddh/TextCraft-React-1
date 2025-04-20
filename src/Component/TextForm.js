import React, { useState } from "react";

export default function TextForm(props) {
  const handleupclick = () => {
    // console.log("Uppercase was clicked" + text)
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("Converted to Uppercase!","success");
  };
  const handleloclick = () => {
    // console.log("Uppercase was clicked" + text)
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("Converted to Lowercase!","success");
  };
  const handleClear = () => {
    // console.log("Uppercase was clicked" + text)
    let newtext = "";
    setText(newtext);
    props.showAlert("Text Cleared!","success");
  };

  const handleCopy = () =>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    props.showAlert("Copied to clipboard!", "success");
  }

  const handleCapital = () => {
    const arr = text.split(" ");
    for (let i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
    }
    const newText = arr.join(" ");
    setText(newText);
    props.showAlert("Convert First Letter to Uppercase for every word", "success");
  };
  

  const handleonchange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");
  // text "New text"; //This is the wrong way to update text
  // setText("new text");//This is the right way to update text
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#051652" }}
      >
        <h1 className='mb-3'>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleonchange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#051652",
            }}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleupclick}>
          Convert To Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleloclick}>
          Convert To lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClear}>
          Clear Text
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>
          Copy The Text
        </button>

        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapital}>
        Capitalizing The First Letter Of Every Word
        </button>

      </div>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "#051652" }}
      >
        <h1>Your text summary</h1>
        <p>
          {text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split("").filter((element)=>{return element.length!==0}).length} Minutes to read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview!"}</p>
      </div>
    </>
  );
}