import React from "react";
import _ from "lodash";
import { random } from "lodash";


function RadialSeparators(props) {
    const turns = 1 / props.count;

    return (
        <>
            <div style={{
                position: "absolute",
                height: "100%",
                transform: `rotate(${0 * turns}turn)`
            }}        >
                <div style={props.style} />
            </div>
            <div style={{
                position: "absolute",
                height: "100%",
                transform: `rotate(${1 * turns}turn)`
            }}        >
                <div style={props.style} />
            </div>
            <div style={{
                position: "absolute",
                height: "100%",
                transform: `rotate(${2 * turns}turn)`
            }}        >
                <div style={props.style} />
            </div>
            <div style={{
                position: "absolute",
                height: "100%",
                transform: `rotate(${3 * turns}turn)`
            }}        >
                <div style={props.style} />
            </div>
            <div style={{
                position: "absolute",
                height: "100%",
                transform: `rotate(${4 * turns}turn)`
            }}        >
                <div style={props.style} />
            </div>
            <div style={{
                position: "absolute",
                height: "100%",
                transform: `rotate(${5 * turns}turn)`
            }}        >
                <div style={props.style} />
            </div>
            <div style={{
                position: "absolute",
                height: "100%",
                transform: `rotate(${6 * turns}turn)`
            }}        >
                <div style={props.style} />
            </div>
            <div style={{
                position: "absolute",
                height: "100%",
                transform: `rotate(${7 * turns}turn)`
            }}        >
                <div style={props.style} />
            </div>
            <div style={{
                position: "absolute",
                height: "100%",
                transform: `rotate(${8 * turns}turn)`
            }}        >
                <div style={props.style} />
            </div>
            <div style={{
                position: "absolute",
                height: "100%",
                transform: `rotate(${9 * turns}turn)`
            }}        >
                <div style={props.style} />
            </div>
            <div style={{
                position: "absolute",
                height: "100%",
                transform: `rotate(${10 * turns}turn)`
            }}        >
                <div style={props.style} />
            </div>
            <div style={{
                position: "absolute",
                height: "100%",
                transform: `rotate(${11 * turns}turn)`
            }}        >
                <div style={props.style} />
            </div>


        </>
    );
}
// _.range(props.count).map(index => (
//     <>
//         <div
//             style={{
//                 position: "absolute",
//                 height: "100%",
//                 transform: `rotate(${index * turns}turn)`
//             }}
//         >
//             <div style={props.style} />
//         </div>
//         {console.log(turns)}
//         {console.log(index)}

//     </>
// ))
export default RadialSeparators;