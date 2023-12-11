import React from "react";
import Paragraph from "../Paragraph";

function Clicker(): React.JSX.Element {
    const  [count, setCount] = React.useState<number>(0);
    return (
        <div>
            <Paragraph content={`cliks: ${count}`} />
            <button
                onClick={()=> {
                    setCount(count + 1)
                }}
            >
                Click me!


            </button>
        </div>
    )

}

export default Clicker