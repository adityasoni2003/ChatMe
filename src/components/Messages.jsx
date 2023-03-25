import Message from "./Message"

const Messages = ()=>{
    return (
        <div className="bg-orange-200 max-h-[470px] overflow-x-scroll scrollbar scrollbar-thin scrollbar-track-transparent flex flex-col gap-2 p-2">
            <Message/>
            <Message/>
            <Message/>
            <Message/>

        </div>
    )
}
export default Messages