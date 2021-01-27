import React, {useState, useEffect} from 'react'
import axios from 'axios';

function Person(props) {

    const [result, setResult] = useState(null);

    // fetch('https://api.agify.io/?name=' + props.name)
        // .then(response => response.json())
        // .then(response => setResult(response))
        // every time you use setState, the component will rerender
        // so invoking setResult will rerender indefinitely
        // fetch -> setResult -> rerender -> fetch -> setResult -> etc
        // .then(response => console.log(response))


    useEffect(() => {
        // fetch('https://api.agify.io/?name=' + props.name)
        //     .then(response => response.json())
        //     .then(response => setResult(response))
        axios.get('https://api.agify.io/?name=' + props.name)
            .then(response => setResult(response.data));
    }, [props.name]);

    return (
        <div>
            <h3>{props.name}</h3>
            {
                result !== null ?
                (
                    <div>
                        <p>Age: {result.age}</p>
                        <p>Count: {result.count}</p>
                    </div>
                )
                : ''
            }
        </div>
    );
}

export default Person
