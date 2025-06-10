
import React, {useState} from "react";

function MyComponent() {

    const [car, setCar] = useState({year: 2024,
                                    make: "Ford",
                                    model: "Mustang"});

    function handleYearChage(event) {
        setCar(c => ({...c, year: event.target.value}));
    }

    function handleMakeChage(event) {
        setCar(c => ({...c, make: event.target.value}))
    }

    function handleModelChage(event) {
        setCar(c => ({...c, model: event.target.value}))
    }

    return(
        <div>
            <p>Your favorite car is: {car.year} {car.make} {car.model}</p>

            <input type="number" value={car.year} onChange={handleYearChage}/><br/>
            <input type="text" value={car.make} onChange={handleMakeChage}/><br/>
            <input type="text" value={car.model} onChange={handleModelChage}/><br/>
        </div>
    );
}

export default MyComponent

