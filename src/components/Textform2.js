import React, { useState } from 'react'

export default function Textform2(props) {
    
    const handledUpClick=()=>{
        console.log("upper case" + text);
        let newText= text.toUpperCase();
        setText(newText)
        props.showAlert("Convert to Upper Case","success");
    }

        const handledUpClick1=()=>{
            console.log("lower case" + text);
            let newText= text.toLowerCase();
            setText(newText)
            props.showAlert("Convert to lower Case","success");
    
        }
        const handledUpClick2=()=>{
            let newText= '';
            setText(newText)
            props.showAlert("Text cleared!","success");
    
        }
        const handledUpClick3=()=>{
            var text=document.getElementById("MyBox")
            text.select();
            navigator.clipboard.writeText(text.value)
            document.getSelection().removeAllRanges();
            props.showAlert("Text copied!","success");
    
        }
    
    const handledOnChange=(event)=>{
        console.log("on change");
        setText(event.target.value)
    }
    const[text, setText]=useState('enter text here');
    return (
        <>
    <div className="container" style = {{color:props.mode==='dark'?'white':'0#42743'}}>
        <h2 className='mb-2'>{props.heading}</h2>
        <div className="mb-3"/>
        <label form="MyBox" className="control-label"></label>
        <textarea className="form-control" value={text} onChange={handledOnChange} style={{backgroundColor:props.mode ==='dark'?'#13466e':'0#42743',color:props.mode==='dark'?'white':'0#42743' }} id="MyBox" rows="8"></textarea>
        <br></br>
        <button type="button" disabled={text.length===0} class="btn btn-primary mx-2 my-1" onClick={handledUpClick}>convert to upper case</button>
        <button type="button" disabled={text.length===0} class="btn btn-primary mx-2 my-1" onClick={handledUpClick1}>convert to lower case</button>
        <button type="button" disabled={text.length===0} class="btn btn-primary mx-2 my-1" onClick={handledUpClick2}>clear text</button>
        <button type="button" disabled={text.length===0} class="btn btn-primary mx-2 my-1" onClick={handledUpClick3}>copy text</button>
        
       </div>
       <div className="container my-4" style = {{color:props.mode==='dark'?'white':'0#42743' }}>
        <h1> Your Text Summary</h1>
        <p> {text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p> {0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length } minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview "}</p>

       </div>
       </>
  )
}
