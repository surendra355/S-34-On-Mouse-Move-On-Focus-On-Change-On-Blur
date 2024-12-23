import React, { useEffect, useRef } from 'react'

function TenthForm() {
    let firstNameInputRef = useRef();
    let lastNameInputRef = useRef();
    let engInputRef = useRef();
    let telInputRef = useRef();
    let hinInputRef = useRef();
    let sciInputRef = useRef();
    let socInputRef = useRef();
    let matInputRef = useRef();
    let resultLabelRef = useRef();

    let engSpanResultRef = useRef();
    let telSpanResultRef = useRef();
    let hinSpanResultRef = useRef();
    let sciSpanResultRef = useRef();
    let socSpanResultRef = useRef();
    let matSpanResultRef = useRef();

    useEffect(()=>{
        console.log("TenthForm Component Is Loaded")
    },[])

  return (
    <div>
      <form>
        <fieldset> <legend>Result Calculator Form</legend>
        <div>
            <label>First Name</label>
            <input type='text' placeholder='First Name' ref={firstNameInputRef}
             onFocus={()=>{firstNameInputRef.current.style.backgroundColor = "skyblue";}}
             onBlur={()=>{firstNameInputRef.current.style.backgroundColor = ""}}
            ></input>
        <span ref={matSpanResultRef}></span>

        </div>
        <div>
            <label>Last Name</label>
            <input type='text' placeholder='Last Name' ref={lastNameInputRef}
             onFocus={()=>{lastNameInputRef.current.style.backgroundColor = "skyblue";}} 
             onBlur={()=>{lastNameInputRef.current.style.backgroundColor = ""}}
             ></input>
        <span ref={matSpanResultRef}></span>

        </div>
        <div>
            <label>English</label>
            <input type='number' placeholder='Enter marks' ref={engInputRef} 
            onFocus={()=>{engInputRef.current.style.backgroundColor = "skyblue";}}
            onBlur={()=>{engInputRef.current.style.backgroundColor = "";}}

            onChange={()=>{
                let marks = engInputRef.current.value
             console.log(marks >= 35 ? "Pass" : "Fail")
            engSpanResultRef.current.innerHTML = marks >= 35 ? "🤩Pass" : "😈Fail";
            
            
            }}
            ></input>
            <span ref={engSpanResultRef}></span>
        </div>
        <div>
            <label>Telugu</label>
            <input type='number' placeholder='Enter marks' ref={telInputRef} 
             onFocus={()=>{telInputRef.current.style.backgroundColor = "skyblue";}}
             onBlur={()=>{telInputRef.current.style.backgroundColor = "";}}
            onChange={()=>{
                let marks = telInputRef.current.value
             console.log(marks >= 35 ? "Pass" : "Fail")
            telSpanResultRef.current.innerHTML = marks >= 35 ? "🤩Pass" : "😈Fail"
            
            }}></input>
             <span ref={telSpanResultRef}></span>
        </div>
        <div>
            <label>Hindi</label>
            <input type='number' placeholder='Enter marks' ref={hinInputRef} 
             onFocus={()=>{hinInputRef.current.style.backgroundColor = "skyblue";}}
             onBlur={()=>{hinInputRef.current.style.backgroundColor = "";}}
            onChange={()=>{
                let marks = hinInputRef.current.value
             console.log(marks >= 35 ? "Pass" : "Fail")
            hinSpanResultRef.current.innerHTML = marks >= 35 ? "🤩Pass" : "😈Fail"
            
            }}></input>
             <span ref={hinSpanResultRef}></span>
        </div>
        <div>
            <label>Science</label>
            <input type='number' placeholder='Enter marks' ref={sciInputRef} 
             onFocus={()=>{sciInputRef.current.style.backgroundColor = "skyblue";}}
             onBlur={()=>{sciInputRef.current.style.backgroundColor = "";}}
            onChange={()=>{
                let marks = sciInputRef.current.value
             console.log(marks >= 35 ? "Pass" : "Fail")
            sciSpanResultRef.current.innerHTML = marks >= 35 ? "🤩Pass" : "😈Fail"
            
            }}></input>
             <span ref={sciSpanResultRef}></span>
        </div>
        <div>
            <label>Social</label>
            <input type='number' placeholder='Enter marks' ref={socInputRef} 
             onFocus={()=>{socInputRef.current.style.backgroundColor = "skyblue";}}
             onBlur={()=>{socInputRef.current.style.backgroundColor = "";}}
            onChange={()=>{
                let marks = socInputRef.current.value
             console.log(marks >= 35 ? "Pass" : "Fail")
            socSpanResultRef.current.innerHTML = marks >= 35 ? "🤩Pass" : "😈Fail"
            
            }}></input>
             <span ref={socSpanResultRef}></span>
        </div>
        <div>
            <label>Maths</label>
            <input type='number' placeholder='Enter marks' ref={matInputRef} 
             onFocus={()=>{matInputRef.current.style.backgroundColor = "skyblue";}}
             onBlur={()=>{matInputRef.current.style.backgroundColor = "";}}
            onChange={()=>{
                let marks = matInputRef.current.value
             console.log(marks >= 35 ? "Pass" : "Fail")
            matSpanResultRef.current.innerHTML = marks >= 35 ? "🤩Pass" : "😈Fail";
            
            
            }}></input>
             <span ref={matSpanResultRef}></span>
        </div>
        <div>
            <button type='button' onMouseMove={()=>{
                let firstName = firstNameInputRef.current.value;
                let lastName = lastNameInputRef.current.value;
                let engMarks = Number(engInputRef.current.value);
                let telMarks = Number(telInputRef.current.value);
                let hinMarks = Number(hinInputRef.current.value);
                let sciMarks = Number(sciInputRef.current.value);
                let socMarks = Number(socInputRef.current.value);
                let matMarks = Number(matInputRef.current.value);
                
                let totalMarks = engMarks+telMarks+hinMarks+sciMarks+socMarks+matMarks;
                resultLabelRef.current.innerHTML = `${firstName} ${lastName} Got Total Of ${totalMarks} Marks`;
               
            }}>Calculate</button>
        </div>
        <label className='resultLabel' ref={resultLabelRef}>Result Here</label>
        </fieldset>
      </form>
    </div>
  )
}

export default TenthForm
