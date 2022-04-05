import React from "react";

    const Output = (props) => {
        
        const handleClick = () =>  {
            props.setParent(props.count + 1)
        }

        return (
            <div>
                <h2>Child Component is called "{props.name}"</h2>
                <button onClick={handleClick}>Clicked from Child</button>
            </div>
        )
    }

export default Output;