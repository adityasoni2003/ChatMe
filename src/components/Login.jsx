import { Link } from "react-router-dom"

const Login = ()=>{
    return (
        <div className="h-screen w-screen bg-orange-300 flex  justify-center items-center py-4">
            <div className="h-96 w-[90vw] relative bg-blue-300  flex flex-col items-center p-10 sm:w-96 rounded-lg">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="absolute top-1 right-1 w-12 h-12 fill-white">
            <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 01.865-.501 48.172 48.172 0 003.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z" />
            </svg>
            <h1 className="text-4xl font-mono">Login</h1>
            <form className="flex flex-col gap-2 mt-4 w-full h-full justify-between items-center" >
                <input type="email" placeholder="Email" className="w-full p-1 border-b-4 placeholder:text-white bg-transparent   focus:outline-none"/>
                <input type="password" placeholder="Password" className="w-full p-1 border-b-4 placeholder:text-white bg-transparent   focus:outline-none"/>
                <button type="submit" className="text-3xl font-bold pb-1 bg-green-300 rounded-lg w-full">Sign In</button>
                <p>Not registered? <Link to="/register" ><span className="font-bold">Register</span></Link></p>
            </form>

                

            </div>
        </div>
    )
}

export default Login