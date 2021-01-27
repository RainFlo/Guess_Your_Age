import React, { useState } from 'react'

function Form() {

    const [inputVal, setInputVal] = useState("");
    const [result, setResult] = useState(null);

    function handleChange(event) {
        setInputVal(event.target.value);
    }

    function handleSubmit(event) {
        // stops the page from reloading
        event.preventDefault();

        // we want to make a request to this URL
        // https://api.agify.io/?name=michael
        fetch('https://api.agify.io/?name=' + inputVal)
            // our callback function returns another promise
            .then(response => response.json())
            .then(response => setResult(response))
        // returns a promise
        //  promise != function
        // promise is a special kind of object
        // 3 types of promise
        // * resolved - got the promise
        // * reject - didn't get the promise
        // * pending - still waiting for the value
    }

    return (
        <div>
            <h2>Guess Your Age</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    onChange={handleChange}
                    value={inputVal}
                    name="name"
                />
                <button>Guess</button>
                {/* all buttons with no type will automatically submit the form
                    to prevent this, you need to put in a type="button" for the button
                    that you DONT want to submit the form */}
                <button type="button">Second Button</button>
            </form>
            {
                result !== null ?
                <div>
                    <p>Name: {result.name}</p>
                    <p>Age: {result.age}</p>
                    <p>Count: {result.count}</p>
                </div>
                : ''
            }
        </div>
    )
}

export default Form
