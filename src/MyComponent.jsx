// updater function = A funcion passed as an argument to setState() usually
//                    ex. setYear(updater function(usually arrow function))
//                    Allow for safe updates based on the previous state 
//                    Used with multiple state updates and asynchronous functions
//                    Good practice to use updater functions always

import React, {useState} from "react";

function MyComponent() {

    const [count, setCount] = useState(0);

    const increment = () => {
        // // Uses the CURRENT state to calculate the NEXT state.
        // // set functions do not trigger an update.
        // // React batches together update for performance reasons.
        // // NEXT state becomes the CURRENT state after an update.

        // setCount(count + 1);
        // setCount(count + 1);
        // setCount(count + 1);
        // // UPDATE



        // Instead, use updater function!
        // Takes the PENDING state to calculate Next state.
        // React puts your updater function in a queue(waiting in line)
        // During the next render, React will call them in the same order.
        setCount(c => c + 1);
        setCount(c => c + 1);
        setCount(c => c + 1);
    }

    const decrement = () => {
        setCount(c => c - 1);
        setCount(c => c - 1);
        setCount(c => c - 1);
    }

    const reset = () => {
        setCount(0);
    }

    return(
        <div className="counter-container">
            <p className="count-display">{count}</p>
            <button className="counter-button" onClick={decrement}>Decrement</button>
            <button className="counter-button" onClick={reset}>Reset</button>
            <button className="counter-button" onClick={increment}>Increment</button>
        </div>
    );

}

export default MyComponent

