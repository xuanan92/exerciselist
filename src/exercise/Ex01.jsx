import React, { Component } from "react"

const typeTemp = {
    "c": "Celsius",
    "f": "Fahrenheit"
}
export default class Ex01 extends Component {
    constructor(props){
    super(props)
        this.state = {
            temp: "",
            defineTemp: "c",
        }
        this.handleCChange= this.handleCChange.bind(this)
        this.handleFChange= this.handleFChange.bind(this)
    }
    handleCChange(temp){
        this.setState({defineTemp:"c", temp})
    }
    handleFChange(temp){
        this.setState({defineTemp:"f", temp})
    }

    render() {
        const temp = this.state.temp
        const defineTemp = this.state.defineTemp
        const fahrenheit = defineTemp ==="c" ? convertToF(temp) : temp
        const celsius = defineTemp ==="f" ? convertToC(temp) : temp
    return(
        <>
            <div className="">
                <h1 className="p-2">Convert Celsius to Fahrenheit with two inputs box</h1>
                <p className="p-2">These are requirements for doing this exercise:</p>
                <ul className="p-2">
                    <li></li>
                </ul>
            </div>
            <TempChange getTemp="c" temp={celsius} onTempChange={this.handleCChange}/>
            <TempChange getTemp="f" temp={fahrenheit} onTempChange={this.handleFChange}/>
        </>
    )
}
}

class TempChange extends Component{
    constructor(props){
        super(props);
        this.handleChange= this.handleChange.bind(this)
    }
    handleChange(e){
        this.props.onTempChange(e.target.value)
    }
    render(){
        const temp = this.props.temp
        const getTemp = this.props.getTemp
    return (
            <div className="p-2">
                <p className="p-2">Enter temperature in {typeTemp[getTemp]} degree</p>
                <input
                    type="text"
                    className="text-black p-2"
                    value={temp}
                    onChange={this.handleChange}
                />  
            </div>
    )
}
}

// tryConvert(defineTemp , method){
//
// }

function convertToF(celsius){
    return  celsius*1.8 +32;
}
function convertToC(fahrenheit){
    return  (fahrenheit-32)/1.8;
}
