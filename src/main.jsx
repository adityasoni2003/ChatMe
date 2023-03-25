import React, { lazy,Suspense } from 'react'
import  ReactDOM  from 'react-dom/client'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'

const Home = lazy(()=> import('./components/Home'));
const Login = lazy(()=> import('./components/Login'));
const Register = lazy(()=> import('./components/Register'));
const Error = lazy(()=> import('./components/Error'))


const App =()=>{
    return (
        <Outlet/>
    )
}
const appRouter = createBrowserRouter([{
    path:'/',
    element:<App/>,
    errorElement :<Suspense><Error/></Suspense>,
    children :[
        {
            path:'/',
            element:<Suspense><Home/></Suspense>
        },
        {
            path:'/login',
            element:<Suspense><Login/></Suspense>
        },
        {
            path:'/register',
            element:<Suspense><Register/></Suspense>
        }
        ]
        
}])



const root = ReactDOM.createRoot(document.querySelector(".root"));
root.render(<RouterProvider router={appRouter}/>);