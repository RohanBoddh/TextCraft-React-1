import React, { useState } from "react";

export default function About(props) {
  // const [mystyle, setmystyle] = useState({
  //   color: "black",
  //   backgroundColor: "white", // Fixed typo
  // });

  let myStyle = {
    color: props.mode === 'dark'?'white':'#042743',
    backgroundColor: props.mode === 'dark'?'rgb(36 74 104)':'white'
  }

  // const [btntext, setbtntext] = useState("Enable Dark Mode");

  // const toggleStyle = () => {
  //   if (mystyle.color === "black") {
  //     setmystyle({
  //       color: "white",
  //       backgroundColor: "black",
  //       border: '1px solid white'
  //     });
  //     setbtntext("Enable Light Mode");
  //   } else {
  //     setmystyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setbtntext("Enable Dark Mode");
  //   }
  // };

  return (
    <div className="container" style={{ color: props.mode === 'dark'?'white':'#042743'}}>
      <h1 className="my-3">About Us</h1>
      <div className="accordion" id="accordionExample" style={mystyle}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button"
              type="button"
              style={mystyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
             <strong>Analyze Your Text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            style={mystyle}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
              TextCraft gives you a way to analyze your text quickly and efficiently. Be it word count, character count or
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={mystyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              <strong>Free To Use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            style={mystyle}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
            TextCraft is a free character counter tool that provides instant characters count and Word 
            count statistics for a given text. TextCraft  reports the number of words and characters. 
            Those it is suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button collapsed"
              type="button"
              style={mystyle}
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
             <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            style={mystyle}
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body" style={mystyle}>
            This word counter software works any web browser such as Chrome, Firefox, 
            Internet Explorer, Safari, Opera. It suits to count characters in Facebook, 
            blog, books, excel document, pdf document, essays, etc.
            </div>
          </div>
        </div>
      </div>
      <div className="container1 my-3">
        <button onClick={toggleStyle} type="button" className="btn btn-primary">
          {btntext}
        </button>
      </div>
    </div>
  );
}