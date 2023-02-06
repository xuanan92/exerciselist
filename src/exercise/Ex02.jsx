import React, { Component } from "react"

export default class Ex02 extends Component {
    render() {
    return(
        <>
            <div className="p-2">
                <Container addsub={<Addsub />}>
                    <p className="p-2">This is a good work from you</p>
                    <p className="p-2">This is a good work from you</p>
                    <p className="p-2">This is a good work from you</p>
                </Container>
            </div>
            
        </>
    )
}
}

function Container(props){
    return (
       <>
        <div className="p-2">
            <ul className="p-2">
                <li>content</li>
                <li>content</li>
                <li>content</li>
            </ul>
            {props.children}
            {props.addsub}
        </div>
       </>
    )
}
function Addsub(){
    return (
        <div>
            <p className="p-2">This is a bad work from you</p>
            <p className="p-2">This is a bad work from you</p>
        </div>
        
    )
}
