import { useState } from "react";


const ContentSection = () => {

    const [enteredText, setEnteredText] = useState('')
    const [displayedText, setDisplayedText] = useState('')

    const handleButtonClick = () => {
        setDisplayedText(enteredText);
        setEnteredText(''); // Reset the enteredText state to empty string
    }

    const handleTextAreaChange = (event) => {
        setEnteredText(event.target.value)
    }



    return (
        <div style={{textAlign:'center', paddingTop:'10px'}}>
            <textarea value={enteredText} placeholder="Write Something" onChange={handleTextAreaChange} cols="30" rows="20"></textarea>
            <br />
            <button onClick={handleButtonClick}>Display Text</button>
            <p>Result: <b>{displayedText}</b></p>
        </div>
    );
};

export default ContentSection;