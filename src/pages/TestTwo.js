import React from "react"

export class TestTwo extends React.Component {
    constructor(props) {
        super(props)
        console.log( this.props.name + "constructor")
       }
     
       componentDidMount(){
           console.log(this.props.name + "didMount")
       }
     
       componentWillUnmount(){
         console.log(this.props.name + "didUnmount")
       }

  render() {
    return(
        <div>
            {console.log(this.props.name + "render")}
           <h2> {this.props.name} </h2> 
        </div>
    )
  }
}   