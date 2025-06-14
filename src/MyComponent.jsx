// useState() = Re-renders the component when the state value changes.

// useRef() = "use Reference" Does not cause re-renders when its value changes.
//            when you want a component to "remember" some information,
//            but you don't want that information to trigger new renders.

//            1. Accessing/Interacting with DOM elements
//            2. Handling Focus, Animations, and Transitions
//            3. Manageing Timers and Intervals

import React, {useState, useEffect, useRef} from "react";

function MyComponent() {
    // let [number, setNumber] = useState(0);
    const ref = useRef(0);

    useEffect(() => {
        console.log("COMPONENT RENDERED");
    })

    function handleClick() {
        // setNumber(n => n + 1);

        ref.current++;
        console.log(ref.current)
    }

    return(
        <div>
            <button onClick={handleClick}>
                Click me!
            </button>
            <input />
        </div>
    );
}

export default MyComponent