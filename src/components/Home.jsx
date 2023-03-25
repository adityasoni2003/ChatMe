import Chat from "./Chat"
import Sidebar from "./Sidebar"



const Home = ()=>{
    return (
        <div className="h-[100vh] w-[100vw] overflow-hidden flex items-center justify-center bg-orange-300">
            <div className="h-[80%] w-[60%] bg-yellow-200 rounded-xl grid grid-cols-[1fr_1.5fr] overflow-hidden">
                <Sidebar/>
                <Chat/>


            </div>
            
            

        </div>
    )
}
export default Home