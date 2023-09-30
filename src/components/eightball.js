import { useState } from 'react';


const responses = [
    "okay", 
    "that sucks", 
    "i wasn't listening lol", 
    "ARRRR!", 
    "im sorry. or congrats. I didn't read what you said."
  ]
  
  const randomResponse = (e, input)=> {
    e.preventDefault();
  
    if (input === ""){
      return (<p>uh, type something in the box idiot</p>)
    }
  
    const maxIndex = responses.length;
    const randomIndex = Math.floor(Math.random()*maxIndex);
  
  
    const constructedPhrase = (
      <div>
        <span>You said: <i>{input}</i></span>
        <br />
        <span>My response: {responses[randomIndex]}</span>
      </div>
    );
  
    return constructedPhrase;
  
  }


function EightBall() {

    const [funnyText, setText] = useState("");
    const [message, setMessage] = useState("")

    return (
        <section className="toys">
        <form className="placeholder-form">
            <input type="text" name="funnyBox" onInput={e => setText(e.target.value)} placeholder="Go ahead and ask." className="funny-textbox"/>
            <button onClick={e => setMessage(randomResponse(e, funnyText))} >Submit</button>
        </form>
        </section>
    );
    
}

export default EightBall;