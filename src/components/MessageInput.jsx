const MessageInput = ()=>{
    return (
        <div className="bg-white flex p-2 items-center ">
            <input type="text" className="border-4 w-full border-gray-400 rounded-lg p-3" placeholder="Write Something...... " />
            <input type="file" id="uploadImage" style={{display:"none"}} />
            <label htmlFor="uploadImage" className=" hover:cursor-pointer   focus:outline-none" ><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-12 h-12">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
                </label>
            <button className="bg-orange-500 p-2 rounded-lg font-extrabold">Send</button>

        </div>
    )
}

export default MessageInput