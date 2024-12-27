import React,{useState} from 'react'

export default function About(props) {
    
     const [myStyle]=useState({
        color : 'black',
       backgroundColor : 'white',
       border :'2px solid',
       borderColor: 'white'
       
    })
    //let myStyle ={
     //   color: props.mode==='dark'?'black':'white',
      //  backgroundcolor :props.mode==='dark'?'black':'white'
    
    //const [btntext,setBtnText]=useState("Enable light mode")

    //const toggleStyle =()=>{
      //  if(myStyle.color === 'black'){
        //    setmyStyle({
          //      color : 'white',
            //    backgroundColor : 'black',
              //  border : '2px solid Blue'
                
         //   })
          //  setBtnText("enable dark mode")

       // }
        //else{
            //setmyStyle({
                //color : 'white',
               // backgroundColor : 'black'

           // })
            //setBtnText("enable dark mode")
      //  }
  //  }


  return (
    
  <div className="container my-5" style={myStyle}>
         <h2 className='my-3'>About us </h2>
          <div class="accordion" id="accordionExample" style={{color: props.mode==='dark'?'black':'white'}}>
          <div class="accordion-item">
             <h2 class="accordion-header">
             <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
             Analyze your Text
             </button>
             </h2>
             <div id="collapseOne" class="accordion-collapse collapse show" style={myStyle} data-bs-parent="#accordionExample">
              <div class="accordion-body">
               <strong>Textutils gives you analyze your text quicly and efficiently.Be it word count,characters count</strong> 
             </div>
            </div>
            </div>
            <div class="accordion-item">
             <h2 class="accordion-header">
             <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
             Free to use
             </button>
             </h2>
             <div id="collapseTwo" class="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
             <div class="accordion-body">
              <strong>Textutils is a free characterv counter tool that provides instant character count and word count statstics for a given text.</strong> 
              textutils reports the numbers of words and characters. thus it is suitable for writting text with word/ character</div>
                </div>
                <div class="accordion-item">
                    <h2 class="accordion-header">
                    <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                    Browser compatiable
                    </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" style={myStyle} data-bs-parent="#accordionExample">
                    <div class="accordion-body">
                        <strong>This word counter software works in any web browsers such as chrom,internet explorer ,firebox,safari,opera. </strong>It suits to count characters in facebook,blog,books,excel document,pdf document,essays,etc .
                    </div>
                    </div>
                </div>
                </div>
                 <div class="container my-3">
                {/* <button type='button' className="btn btn.danger">Enable dark mode</button>*/}
               {/* <button  onClick={toggleStyle} type="button" class="btn btn-primary">{btntext}</button>*/}
               </div>/
    </div>
    </div>
  )
}
