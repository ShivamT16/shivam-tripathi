import React from "react"
import { TestOne } from "./TestOne"
import { TestTwo } from "./TestTwo"

export class TestMain extends React.Component {
  // eslint-disable-next-line no-useless-constructor
  constructor(props) {
   super(props)
   console.log("main constructor")
  }

  componentDidMount(){
      console.log("main didMount")
  }

  componentWillUnmount(){
    console.log("main didUnmount")
  }

  render() {
    return(
        <div>
            {console.log("main render")}
            <TestOne name={"1Name"} />
            <TestTwo name={"2Name"} />
        </div>
    )
  }
}