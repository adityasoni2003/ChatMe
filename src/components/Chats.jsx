const Chats = () =>{
    return (
        <div className="overflow-y-scroll scrollbar scrollbar-none h-[75%] w-full">
        <div className=" flex justify-start gap-4 mt-2 mx-2 bg-orange-200 p-1 rounded-md overflow-hidden">
            <img className="rounded-full w-[50px] h-[50px]" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpa5oCHmskuYPL2pqULjxGx_jTf8UV_6FXn-1cL9rkkwjqSEt1PmYk4Us&s" alt="" />
            <div className="flex flex-col">
                <h1 className="text-xl  font-bold">Rahul</h1>
                <p className="text-lg  font-semibold">Hi.....</p>
            </div>
            </div>

        </div>
    )
}
export default Chats