import Chats from "./Chats"
import Search from "./Search"
import SideHeader from "./SideHeader"

const Sidebar = ()=>{
    return (
        <div className="bg-orange-500">
            <SideHeader/>
            <Search/>
            <Chats/>
        </div>
    )
}

export default Sidebar