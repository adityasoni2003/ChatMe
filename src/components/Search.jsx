import { useState } from "react"

const Search=()=>{
    const [searchVal,setSearchVal] = useState("")
    return (
        <input className="focus:outline-none w-full text-2xl p-1 bg-transparent border-b-2 placeholder:text-white placeholder:text-sm" type="text" placeholder="Search" onChange={(e)=>{setSearchVal(e.target.value)}} value={searchVal}/>
    )
}

export default Search