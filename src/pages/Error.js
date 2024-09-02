import React from 'react'
import { useRouteError } from 'react-router-dom'

export const Error = () => {
    const error = useRouteError();
  return (
    <div>
        <h1>Oopss!! </h1>
        <h2> Error {error.status} : {error.statusText} </h2>
        <h2>  {error.data}  </h2>
        {/* <p> {error.data} </p> */}
        {/* {console.log(error)} */}
    </div>
  )
}
