import { useRouteError } from "react-router-dom"

const Error = ()=>{
    const err = useRouteError();
    return (
        <>
        <h1>Looks like something broke.....</h1>
        <h1>The error : {err.status}</h1>
        </>
    )
}

export default Error